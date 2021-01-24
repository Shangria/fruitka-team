window.addEventListener('load', function () {

    const searchLink = document.getElementById('search-link');
    const searchWindow = document.getElementById('search-window');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchBtnSend = document.getElementById('search-btn-send');
    const productTypeFilters = document.querySelectorAll('[data-filter]');
    let locationSearch;

    searchLink.addEventListener('click', function () {
        searchWindow.style.display = 'block';
    });

    searchClose.addEventListener('click', function () {
        searchWindow.style.display = 'none';
    });

    searchBtnSend.addEventListener('click', function (e) {
debugger
        const searchValue=searchInput.value;
        const location=location.href=`shop.html?=${searchValue}`
        searchInput.value='';
        console.log(locationSearch );

        console.log(location);
    });

    function filter(teg){
        const productFilters = document.querySelectorAll('[data-type]');
        productFilters.forEach(function (tag){
            if (tag==locationSearch){

            }
        })
        console.log(productFilters);
        productFilters.forEach(function (element){
            if (productFilters){

            }
        })

    }

    console.log(window.location.href);



})
// window.location.href='http://localhost:63342/fruitka-team/docs/shop.html?keyword=fruits'




