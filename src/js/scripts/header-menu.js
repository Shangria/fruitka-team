window.addEventListener('load', function () {

    const menuBox = document.querySelector('.header__menu-box');
    const menuBurger = menuBox.querySelector('.header__menu-burger');


    menuBurger.addEventListener('click', function () {
        menuBox.querySelector('.header__menu-burger').classList.toggle('active');
        menuBox.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    })
});


