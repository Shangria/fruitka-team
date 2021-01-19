window.addEventListener('load', function () {

    const sliderBox = new Slider(document.querySelectorAll('[data-sliders-box]'), 4000);
    const slider = document.getElementById('wrapper-banner-slider');
    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        sliderBox.prev();
    });


    arrowRight.addEventListener('click', function () {
        sliderBox.next()
    });

    let initialPoint;

    slider.addEventListener('touchstart', function (event) {

        initialPoint = sliderBox.getInitialPoint();

    }, false);

    slider.addEventListener('touchend', function (event) {

        sliderBox.touchSlider(initialPoint,sliderBox)

    }, false);
});

