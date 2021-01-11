'use strict'

const pagination = document.querySelector('.pagination');

const container = pagination.querySelector('.pagination__container');

const productTypeFilters = document.querySelectorAll('[data-filter]');

const elemOnPage = 6;

const arrProducts = [
    { src: "./img/products/product-img-1.jpg", alt: "strawberry-img", title: "Strawberry", cost: "85$", type: "berries"},
    {src: "./img/products/product-img-2.jpg", alt: "berry-img", title: "Berry", cost: "70$", type: "berries"},
    {src: "./img/products/product-img-3.jpg", alt: "lemon-img", title: "Lemon", cost: "35$", type: "citruses"},
    {src: "./img/products/product-img-4.jpg", alt: "kiwi-img", title: "Kiwi", cost: "50$", type: "fruits"},
    {src: "./img/products/product-img-5.jpg", alt: "apple-img", title: "Apple", cost: "20$", type: "fruits"},
    {src: "./img/products/product-img-6.jpg", alt: "raspberry-img", title: "Raspberry", cost: "60$", type: "berries"},
    {src: "./img/products/product-img-7.jpg", alt: "lime-img", title: "Lime", cost: "90$", type: "citruses"},
    {src: "./img/products/product-img-8.jpg", alt: "banana-img", title: "Banana", cost: "40$", type: "fruits"},
    {src: "./img/products/product-img-9.jpg", alt: "orange-img", title: "Orange", cost: "35$", type: "citruses"},
    {src: "./img/products/product-img-10.jpg", alt: "pear-img", title: "Pear", cost: "25$", type: "fruits"},
    {src: "./img/products/product-img-11.jpg", alt: "guava-img", title: "Guava", cost: "90$", type: "fruits"},
    {src: "./img/products/product-img-12.jpg", alt: "plum-img", title: "Plum", cost: "20$", type: "fruits"},
    {src: "./img/products/product-img-13.jpg", alt: "grapes-img", title: "Grapes", cost: "55$", type: "berries"},
    {src: "./img/products/product-img-14.jpg", alt: "blueberry-img", title: "Blueberry", cost: "85$", type: "berries"},
    {src: "./img/products/product-img-15.jpg", alt: "mango-img", title: "Mango", cost: "35$", type: "fruits"},
    {src: "./img/products/product-img-16.jpg", alt: "garnet-img", title: "Garnet", cost: "70$", type: "fruits"},
    {src: "./img/products/product-img-17.jpg", alt: "morinda", title: "Morinda citrus-leaf", cost: "35$", type: "citruses"},
    {src: "./img/products/product-img-18.jpg", alt: "watermelon-img", title: "Watermelon", cost: "85$", type: "berries"},
    {src: "./img/products/product-img-19.jpg", alt: "melon-img", title: "Melon", cost: "70$", type: "berries"},
    {src: "./img/products/product-img-20.jpg", alt: "eggplant-img", title: "Eggplant", cost: "35$", type: ""},
];

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

function getNewClass(e) {
    const event = e.target;

    const button = document.querySelectorAll('.pagination__item');

    if (!event.closest('.pagination__item')) return;

    button.forEach((elem) => elem.classList.remove('active'));
    
    event.classList.add('active');
}

pagination.addEventListener('click', getFiltration);
pagination.addEventListener('click', getPagination);
pagination.addEventListener('click', getNewClass);

createElem(arrProducts.slice(0, 6));
