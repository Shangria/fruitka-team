window.addEventListener('load', function () {
    debugger
    const headerTitle = document.getElementById('header__menu-title')
    const itemTitle = headerTitle.querySelectorAll('[data-sub-menu]');

    itemTitle.forEach(function (element) {
        element.addEventListener('mouseover', showElement,)
        element.addEventListener('mousemove', hiddenElement,)
    })

    function showElement() {
        debugger
        if (this.children.length > 1) {
            this.children[1].classList.add('header_sub-menu-active')
        } else {
            return false
        }
    }

    function hiddenElement() {
        if (this.children.length > 1) {
            this.children[1].classList.remove('header_sub-menu-active')
        }
        else {
            return false
        }
    }
});
