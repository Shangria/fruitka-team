window.addEventListener('load', function (event) {

    const form = document.getElementById('contact__form');
    const formInputs = form.querySelectorAll('[data-input]');

    let formSubmitted = false;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formSubmitted = true;
        validateForm();
    });

    formInputs.forEach(function (element) {
        element.addEventListener('keyup', function () {
            if (formSubmitted) {
                validateForm();
            }
        });
    })

    function validateForm() {
        formInputs.forEach(function (element, index) {
            let popUpDiv = document.getElementById(`${element.name + element.id}`);
            if (element.value === '') {
                debugger;
                if (popUpDiv == null) {
                    popUpDiv = document.createElement('div');
                    popUpDiv.className = 'contact-wrapper__error-message';
                    popUpDiv.id = `${element.name + element.id}`;
                    popUpDiv.innerHTML = `<p>Enter a valid ${element.name}</p> <i class="fa fa-ban" aria-hidden="true"></i>`;
                    element.parentElement.insertBefore(popUpDiv, element.nextSibling);
                }
            } else {
                if (popUpDiv != null) {
                    popUpDiv.remove();
                }
            }
        })
    }
});

