import {AutoSlider} from './slider.js'

window.addEventListener('load', function () {
    const slider = new AutoSlider(document.querySelectorAll('[data-sliders-box]'), 3000);
    slider.init();

    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        slider.prev();
    });

    arrowRight.addEventListener('click', function () {
        slider.next()
    });
});

