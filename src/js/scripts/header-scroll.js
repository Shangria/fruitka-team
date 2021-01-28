window.addEventListener('scroll', function () {
    const headerScroll = document.getElementById('header-scroll');
    const headerInner = document.querySelector('.header__inner');
    const scrollDown = window.pageYOffset;

    if (scrollDown >= 100) {
        headerScroll.classList.add('header_background-color');
        headerInner.classList.add('header__inner_scroll');
    } else if (scrollDown === 0) {
        headerScroll.classList.remove('header_background-color');
        headerInner.classList.remove('header__inner_scroll');
    }
});

function mediaHeader() {
    const headerInner = document.querySelector('.header__inner');
    const nav = document.querySelector('.header__navigation');
    const iconBox = document.querySelector('.header__icon');


    const mediaQueries = window.matchMedia('(max-width: 600px)');

    if (mediaQueries.matches) {
        nav.append(iconBox);
    } else {
        headerInner.append(iconBox);
    }
}



window.addEventListener('load', mediaHeader);
window.addEventListener('resize', mediaHeader);


