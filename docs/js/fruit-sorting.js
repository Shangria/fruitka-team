window.addEventListener('load', function () {

    // const sortAll = document.getElementById('sort-all');
    // const sortBerries = document.getElementById('sort-berries');
    // const sortCitrus = document.getElementById('sort-citrus');
    // const sortFruits = document.getElementById('sort-fruits');

    const productTypeFilters = document.querySelectorAll('[data-product-type-filter]');
    debugger;
    productTypeFilters.forEach(function (filterElement) {
        const filterType = filterElement.getAttribute('data-product-type-filter');
        debugger;
        filterElement.addEventListener('click', function () {

            const products = document.querySelectorAll('[data-product-type]');
            debugger;
            products.forEach(function (productElement) {
                const productType = productElement.getAttribute('data-product-type');
                if (filterType === 'all' || filterType === productType) {
                    productElement.style.display = null;
                } else {
                    productElement.style.display = 'none';
                }
            });

        });

    });

    // sortAll.addEventListener('click', function () {
    //     const productsContainer = document.getElementById('pagination__products-container');
    //
    //
    //
    //     console.log(productsContainer)
    //
    // })
})