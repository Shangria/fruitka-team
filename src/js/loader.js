window.addEventListener('load', function () {

    const loaderWrapper = document.getElementById('loader__wrapper');

    function hideLoader() {
        loaderWrapper.classList.add('loader-hidden');
    }

    function hideLoaderRemove() {
        loaderWrapper.remove();
    }
    hideLoader();
    setTimeout(hideLoaderRemove,1000)
});
