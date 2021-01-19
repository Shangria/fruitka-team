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
    let finalPoint;

    slider.addEventListener('touchstart', function (event) {

        event.preventDefault();
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    }, false);

    document.addEventListener('touchend', function (event) {

        event.preventDefault();
        event.stopPropagation();

        finalPoint = event.changedTouches[0];
        const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    sliderBox.next();
                } else {
                    sliderBox.prev()
                }
            }
        }
    }, false);
});

