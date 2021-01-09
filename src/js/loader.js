window.addEventListener('load', function () {
    debugger

    function hideLoader() {
        const loaderWrapper = document.getElementById('loader__wrapper');
        loaderWrapper.classList.add('loader-hidden');
    }

    function delayLoader() {
        setTimeout(() => hideLoader().apply(this, arguments), 1500);
    }
    delayLoader();
});
