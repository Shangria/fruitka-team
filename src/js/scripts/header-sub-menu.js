window.addEventListener('load', function () {

    const headerTitle = document.getElementById('header__menu-title')
    const itemTitle = headerTitle.querySelectorAll('[data-sub-menu]');

    itemTitle.forEach(function (element) {
        element.addEventListener('mouseenter', showAndHiddenElement, false);
        element.addEventListener('mouseleave', showAndHiddenElement, false);
    })

    function showAndHiddenElement() {
        if (this.children.length > 1) {
            this.children[1].classList.toggle('header_sub-menu-active')
        } else {
            return false
        }
    }
});
