window.addEventListener('load', function () {

    const productTypeFilters = document.querySelectorAll('[data-product-type-filter]');

    function filterProducts(filterType) {
        const products = document.querySelectorAll('[data-product-type]');

        products.forEach(function (productElement) {
            const productType = productElement.getAttribute('data-product-type');
            if (filterType === 'all' || filterType === productType) {
                productElement.classList.remove('products_col-hidden');
            } else {
                productElement.classList.add('products_col-hidden');
            }
        });
    }




    {
        productTypeFilters.forEach(function (filterElement) {
            const filterType = filterElement.getAttribute('data-product-type-filter');

            filterElement.addEventListener('click', function () {

                filterElement.classList.toggle('pagination_item-color');
                filterElement.querySelectorAll('.pagination_item-color').forEach(e => e.remove());

                filterProducts(filterType);

            });
        });
    }




    {
        const urlParams = new URLSearchParams(window.location.search);
        const urlParamKeyword = urlParams.get('keyword');
        if (urlParamKeyword != null) {
            //todo

            filterProducts(urlParamKeyword);
        }
    }
})
// window.location.href='http://localhost:63342/fruitka-team/docs/shop.html?keyword=fruits'