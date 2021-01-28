window.addEventListener('load', function () {

    const searchLink = document.getElementById('search-link');

    searchLink.addEventListener('click', function () {

        const searchBox = document.createElement('section');
        searchBox.classList.add('search');
        searchBox.id = 'search-window';
        searchBox.innerHTML = `
                                <div class="search__wrapper">
                                  <div class="search__btn_close" id="search-close"><i class="fa fa-close"></i></div>
                                  <div class="search__container">
                                    <h3>search for:</h3>
                                    <input class="search__line" id="search-input" type="text" placeholder="Keywords"/>
                                    <button class="search__btn" id="search-btn-send" type="submit">Search<i class="fa fa-search"></i></button>
                                  </div>
                                </div>
                              `;
        document.body.prepend(searchBox);

        const searchWindow = document.getElementById('search-window');
        const searchClose = document.getElementById('search-close');
        const searchInput = document.getElementById('search-input');
        const searchBtnSend = document.getElementById('search-btn-send');

        searchClose.addEventListener('click', function () {

            searchWindow.remove();
        });

        searchBtnSend.addEventListener('click', function (e) {
            let params = new URLSearchParams(window.location.search);
            params.set('searchValue', searchInput.value);
            window.location = 'shop.html?' + params.toString();
        });
    });
})





