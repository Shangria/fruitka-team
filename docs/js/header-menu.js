window.addEventListener('load', function () {

    const menuBox = document.querySelector('.header__menu-box');
    const menuBurger = menuBox.querySelector('.header__menu-burger');


    menuBurger.addEventListener('click', function () {
        menuBox.querySelector('.header__menu-burger').classList.toggle('active');
        menuBox.querySelector('.header__menu').classList.toggle('active');
    })
});


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
