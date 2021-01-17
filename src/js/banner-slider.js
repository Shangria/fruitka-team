window.addEventListener('load', function () {

    const sliderBanner = new Slider(document.querySelectorAll('[data-slider-banner]'), 5000);
    const arrowLeft = document.getElementById('data-slider-left');
    const arrowRight = document.getElementById('data-slider-right');


    arrowLeft.addEventListener('click', function () {
        sliderBanner.prev();
    });


    arrowRight.addEventListener('click', function () {
        sliderBanner.next();
    });
});

