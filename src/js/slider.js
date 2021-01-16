function Slider(slides) {
    const me = this;
    let sliderElements;
    let currentIndex = 0;
    let timeoutId;

    me.prev = prev;
    me.next = next;
    me.setSlide = setSlide;

    {
        sliderElements = [];
        for (const slide of slides) {
            sliderElements.push(slide);
            slide.style.order = '1';
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
                    element.style.order = '0';
                } else {
                    element.style.order = '1';
                }
            }
        );
    }

    function startAutoSlide(direction) {
        timeoutId = setTimeout(function () {
            changeSlide(direction);
        }, 4000)
    }

    function stopAutoSlide() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }

}

