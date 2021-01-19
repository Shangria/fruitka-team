window.addEventListener('load', function () {
    const slider = new Slider(document.querySelectorAll('#local-shop-owner_slider li'), 3000);
    const sliderBox = document.getElementById('local-shop-owner_slider');

    let initialPoint;

    sliderBox.addEventListener('touchstart', function (event) {

        event.preventDefault();
        event.stopPropagation();
        initialPoint = slider.getInitialPoint();
    }, false);

    sliderBox.addEventListener('touchend', function (event) {

        event.preventDefault();
        event.stopPropagation();
        slider.touchSlider(initialPoint,slider)

    }, false);
});
