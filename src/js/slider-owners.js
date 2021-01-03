window.addEventListener('load', function () {
    debugger

    const ownersBlock = document.getElementById('local-shop-owner_slider');
    const liArray = [...ownersBlock.querySelectorAll('li')];
    let currentIndex;

    function toggleSlider() {
        let nextIndex;
        if (currentIndex == null) {
            nextIndex = 0;
        } else if (currentIndex === liArray.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }

        liArray.forEach(function (element, index) {
            if (index === nextIndex) {
                element.classList.remove('local-shop-owner_hidden');
            } else {
                element.classList.add('local-shop-owner_hidden');
            }
        });

        currentIndex = nextIndex;
    }

    toggleSlider();
    setInterval(toggleSlider, 2000);
});