export class Slider {
    constructor(slides) {
        this.sliderElements = [];
        this.currentIndex = 0;
        for (const slide of slides) {
            this.sliderElements.push(slide);
        }
    }

    prev() {
        if (this.currentIndex === 0) {
            this.setSlide(this.sliderElements.length - 1);
        } else {
            this.setSlide(this.currentIndex - 1);
        }
    }

    next() {
        if (this.currentIndex === this.sliderElements.length - 1) {
            this.setSlide(0);
        } else {
            this.setSlide(this.currentIndex + 1);
        }
    }

    setSlide(index) {
        this.currentIndex = index;
        this.sliderElements.map((element, index) => {
                if (index === this.currentIndex) {
                    element.classList.remove('slider-hidden');
                    element.classList.add('slider-shown');
                } else {
                    element.classList.add('slider-hidden');
                    element.classList.remove('slider-shown');
                }
            }
        );
    }

    init() {
        this.setSlide(0);
    }

    destroy() {
        this.sliderElements.map((element, index) => {
            element.classList.remove('slider-hidden');
            element.classList.remove('slider-shown');
        });
    }
}

export class AutoSlider extends Slider {
    constructor(slides, autoscrollInterval) {
        super(slides);
        this.timeoutId = null;
        this.autoscrollInterval = autoscrollInterval || 5000;
    }

    setSlide(index) {
        this.stopAutoscroll();
        this.startAutoscroll(this.currentIndex, index);
        super.setSlide(index);
    }

    destroy() {
        super.destroy();
        this.stopAutoscroll();
    }

    stopAutoscroll() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    startAutoscroll(currentIndex, nextIndex) {
        this.timeoutId = setTimeout(() => {
            if (nextIndex >= currentIndex) {
                this.next();
            } else {
                this.prev();
            }
        }, this.autoscrollInterval);
    }
}



