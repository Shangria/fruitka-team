window.addEventListener('load', function () {
    const pagination = document.querySelector('.pagination');
    const container = pagination.querySelector('.pagination__container');
    const productTypeFilters = document.querySelectorAll('[data-filter]');
    const elemOnPage = 6;

    const urlParams = new URLSearchParams(window.location.search);
    const initialFilterType = (urlParams.get('searchValue') ?? 'all').toLowerCase();
    if (initialFilterType != null) {
        filterProducts(initialFilterType);
        // getPagination();
        toggleActiveCssClassForFilterButton(initialFilterType);
    }

    pagination.addEventListener('click', getFiltration);
    pagination.addEventListener('click', getPagination);
    pagination.addEventListener('click', toggleActiveCssClassForFilterButtonByClickEvent);


    function createElem(arr) {
        const html = arr.map((elem) => `
            <li class="pagination__col" data-type = ${elem.type}>
                <img class="pagination__img" src = ${elem.src} alt= ${elem.alt}>
                <div class="pagination__box">
                    <h3>${elem.title}</h3>
                    <div class="pagination__box-text">
                        <span>Per Kg</span>
                        ${elem.cost}
                    </div>
                    <a class="pagination__box-button btn-main">
                        <i class="fa fa-shopping-cart pagination__icon"></i>
                        Add to Cart
                    </a>          
                </div>
            </li>
        `).join('');

        container.innerHTML = html;
    }

    function getPagination(e) {
        const pageNum = +e.target.innerHTML;

        if (!e.target.closest('.pagination__btn') || isNaN(pageNum)) return;

        const start = (pageNum - 1) * elemOnPage;
        const end = start + elemOnPage;

        const viewElements = arrProducts.slice(start, end);

        createElem(viewElements);
    }

    function getFiltration(e) {

        const filterType = e.target.getAttribute('data-filter');

        if (!filterType) return;

        filterProducts(filterType);
    }

    function alphabetSort(a, b) {
        return a.title.localeCompare(b.title);
    }


    function filterProducts(filterType) {

        const filteredArr = arrProducts.filter((elem) => {
            if (filterType === 'all') {
                return arrProducts;
            } else {
                return elem.type === filterType;
            }
        }).sort(alphabetSort);

        createElem(filteredArr);
    }

    function toggleActiveCssClassForFilterButtonByClickEvent(e) {
        const element = e.target;
        const filterType = element.getAttribute('data-filter');
        toggleActiveCssClassForFilterButton(filterType);
    }


    function toggleActiveCssClassForFilterButton(filterType) {
        productTypeFilters.forEach(element => {
            const thisFilterType = element.getAttribute('data-filter');
            if (thisFilterType == filterType) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
});

