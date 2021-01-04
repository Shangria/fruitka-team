window.addEventListener('load', function () {

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
                element.style.right='50%';
                element.style.transition= 'right ease 1s';
            } else {
                element.style.right='-100%';
            }
        });

        currentIndex = nextIndex;
    }

    toggleSlider();
    setInterval(toggleSlider, 6000);
});