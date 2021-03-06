(function () {
    const RENDER_CARD_EVENT_NAME = 'render-cart';
    let cart = getCartFromStorage();
    if (cart == null) {
        saveCartToStorage([]);
    }

    document.addEventListener('registerAddToCartElements', function (event) {
        registerAddToCartElements(event.target);
    });

    document.addEventListener('registerRemoveFromCartElements', function (event) {
        registerRemoveFromCartElements(event.target);
    });


    window.addEventListener('load', function () {

        document.dispatchEvent(new CustomEvent('registerAddToCartElements'));
        document.dispatchEvent(new CustomEvent('registerRemoveFromCartElements'));


        const clearBtn = document.getElementById('clear-cart');
        if (clearBtn != null) {
            clearBtn.addEventListener('click', function () {
                document.getElementById('body-container').remove();
                document.querySelector('.total-table-body_data').innerText='';
                saveCartToStorage([]);
            });
        }
        function calculateTheOrderAmount(){
            const dataSum=document.querySelector('.total-table-body_data');
            const dataPrice=document.querySelectorAll('.product-table-body__total');
            let result;
            let sum=0;
            [...dataPrice].map(function (elem){
                result=+elem.textContent.replace(/[^\d]/g, '');
                 sum+=result;
                dataSum.innerHTML='$'+sum;
            })
        }

        let cartContainer = document.getElementById('cart-container');
        if (cartContainer != null) {
            renderCart(cartContainer);
            document.addEventListener(RENDER_CARD_EVENT_NAME, function (e) {
                renderCart(cartContainer);
            })
        }

        function renderCart(cartContainer) {
            const products = JSON.parse(window.localStorage.getItem('products'));
            const productsInCart = getCartFromStorage();
            const cartProducts = products.filter(p => productsInCart.includes(p.title));

            cartContainer.innerHTML = `
                <table class="product-table">
                    <thead class="product-table-head">
                        <tr class="product-table-head__row">
                            <th class="product-table-head__titles"></th>
                            <th class="product-table-head__titles">Product Image</th>
                            <th class="product-table-head__titles">Name</th>
                            <th class="product-table-head__titles">Price</th>
                            <th class="product-table-head__titles">Quantity</th>
                            <th class="product-table-head__titles">Total</th>
                        </tr>
                    </thead>
                    <tbody class="product-table-body" id="body-container"></tbody>
                </table>
            `;

            const tbody = cartContainer.querySelector('tbody');
            cartProducts.forEach(function (product) {
                let tr = document.createElement('tr');
                tr.classList.add('product-table-body__row');
                tr.innerHTML = `
                        <td class="product-table-body_data">
                            <a class="product-table-body_remove__link" data-remove-from-cart="${product.title}">
                                <i class="product-table-body_remove fa fa-times-circle"></i>
                            </a>
                        </td>
                        <td class="product-table-body_data"><img class="product-table-body__image" src="${product.src}"/></td>
                        <td class="product-table-body__name product-table-body_data">${product.title}</td>
                        <td class="product-table-body__price product-table-body_data">$${product.cost}</td>
                        <td class="product-table-body__quantity product-table-body_data">
                            <input class="product-table-body__quantity__input" type="number" value="1"/>
                        </td>
                        <td class="product-table-body__total product-table-body_data">$${product.cost}</td>
                `;
                tbody.append(tr);
                calculateTheOrderAmount();

                tr.querySelector('input').addEventListener('change', function (event) {
                    if (event.target.value < 1) {
                        event.target.value = 1;
                    } else {
                        const value = parseInt(event.target.value || '0');

                        tr.querySelector('.product-table-body__total').innerText = '$' + value * product.cost;
                        calculateTheOrderAmount()
                    }
                })
            });
            tbody.dispatchEvent(new CustomEvent('registerRemoveFromCartElements', {bubbles: true}));
        }

    });


    function getCartFromStorage() {
        return JSON.parse(window.localStorage.getItem('cart'));
    }

    function saveCartToStorage(cart) {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    function registerAddToCartElements(container) {
        container.querySelectorAll('[data-add-to-cart]').forEach(function (elem) {
            let product = elem.getAttribute('data-add-to-cart');
            if (product) {
                elem.addEventListener('click', function () {
                    let cart = getCartFromStorage();
                    if (!cart.includes(product)) {
                        cart.push(product);
                        saveCartToStorage(cart);
                        document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));
                    }
                });
            }
        });
    }

    function registerRemoveFromCartElements(container) {
        container.querySelectorAll('[data-remove-from-cart]').forEach(function (elem) {
            let product = elem.getAttribute('data-remove-from-cart');
            if (product) {
                elem.addEventListener('click', function () {
                    let cart = getCartFromStorage();
                    if (cart.includes(product)) {
                        cart = cart.filter(p => p !== product);
                        saveCartToStorage(cart);
                        document.dispatchEvent(new Event(RENDER_CARD_EVENT_NAME));
                    }
                });
            }
        });
    }

})();