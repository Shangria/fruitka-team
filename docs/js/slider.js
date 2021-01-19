function Slider(slides, autoscrollInterval) {
    const me = this;
    let sliderElements;
    let currentIndex = 0;
    let timeoutId;


    me.prev = prev;
    me.next = next;
    me.setSlide = setSlide;
    me.touchSlider = touchSlider;
    me.getInitialPoint = getInitialPoint;

    {
        sliderElements = [];
        for (const slide of slides) {

            sliderElements.push(slide);
            slide.classList.add('slider-hidden');
            slide.classList.remove('slider-shown');
        }
        setSlide(0);
    }


    function prev() {
        changeSlide('back');
    }

    function next() {
        changeSlide('forward');
    }

    function setSlide(index) {
        currentIndex = index;
        stopAutoSlide();

        let direction;
        if (index >= currentIndex) {
            direction = 'forward';
        } else {
            direction = 'back';
        }
        toggleSlides();
        startAutoSlide(direction);
    }


    function changeSlide(direction) {
        stopAutoSlide();

        if (direction === 'back') {
            if (currentIndex === 0) {
                currentIndex = sliderElements.length - 1;
            } else {
                currentIndex = currentIndex - 1;
            }
        } else {
            if (currentIndex === sliderElements.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex = currentIndex + 1;
            }
        }

        toggleSlides();
        startAutoSlide(direction);
    }

    function toggleSlides() {

        sliderElements.map(function (element, index) {
                if (index === currentIndex) {
                    element.classList.remove('slider-hidden');
                    element.classList.add('slider-shown');
                } else {
                    element.classList.add('slider-hidden');
                    element.classList.remove('slider-shown');
                }
            }
        );
    }

    function startAutoSlide(direction) {
        if (autoscrollInterval) {
            timeoutId = setTimeout(function () {
                changeSlide(direction);
            }, autoscrollInterval);
        }
    }

    function stopAutoSlide() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
    function getInitialPoint() {
        return event.changedTouches[0];
    }

    function touchSlider(initialPoint, element) {
        let finalPoint = event.changedTouches[0];
        const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    element.next();
                } else {
                    element.prev()
                }
            }
        }
    }
}

