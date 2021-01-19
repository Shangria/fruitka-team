window.addEventListener('load', function () {

    const sliderBox = new Slider(document.querySelectorAll('[data-sliders-box]'), 777000);
    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        sliderBox.prev();
    });


    arrowRight.addEventListener('click', function () {
        sliderBox.next()
    });
});

