window.addEventListener('load', function () {

    const menuBox = document.querySelector('.header__menu-box');
    const menuClick = menuBox.querySelector('.header__menu-click');


    menuClick.addEventListener('click', function () {
        menuBox.querySelector('.header__menu').classList.toggle('header__show');
    })
})