window.addEventListener('scroll', function () {
    const headerScroll = document.getElementById('header-scroll');
    const scrollDown = window.pageYOffset;

    if (scrollDown >= 100) {
        headerScroll.classList.add('header_background-color');
    } else if (scrollDown === 0) {
        headerScroll.classList.toggle('header_background-color');
        headerScroll.classList.add('header_background-color-opacity');
    }
});
