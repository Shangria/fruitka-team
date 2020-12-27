window.addEventListener('load', function () {

    const menuBox = document.querySelector('.header__menu-box');
    const menuClick = menuBox.querySelector('.header__menu-click');


    menuClick.addEventListener('click', function () {

        const headerMenu = menuBox.querySelector('.header__menu');
        debugger;
        headerMenu.classList.toggle('header__show');
        // if (headerMenu.classList.contains('header__show')) {
        //     headerMenu.classList.remove('header__show');
        // }else {
        //     headerMenu.classList.add('header__show');
        // }
        // console.log(headerMenu);

    })
})