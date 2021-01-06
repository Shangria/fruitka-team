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
