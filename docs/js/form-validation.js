window.addEventListener('load', function (event) {

    const form = document.getElementById('contact__form');
    const formInputs = form.querySelectorAll('[data-input-validation]');

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
            const validationRule = element.getAttribute('data-input-validation');
            const validationMessage = element.getAttribute('data-input-validation-message');

            if (validationRule === 'required' && isEmpty(element.value)) {
                showErrorMessage(element, validationMessage);
            } else if (validationRule === 'phone' && !isPhoneValid(element.value)) {
                showErrorMessage(element, validationMessage);
            } else if (validationRule === 'email' && !isEmailValid(element.value)) {
                showErrorMessage(element, validationMessage);
            } else if (validationRule === 'min-length' && !isMinLengthValid(element.value, parseInt(element.getAttribute('data-input-validation-min-length')))) {
                showErrorMessage(element, validationMessage);
            } else {
                hideErrorMessage(element);
            }
        })
    }

    /**
     * returns true if value is an empty string
     * returns false if value is not an empty string
     * @returns {boolean}
     */
    function isEmpty(value) {
        return value === '';
    }

    /**
     * returns true if phone is valid
     * returns false if phone is not valid
     * @returns {boolean}
     */
    function isPhoneValid(value) {
        return !isEmpty(value) && !isNaN(value);
    }

    /**
     * returns true if email is valid
     * returns false if email is not valid
     * @returns {boolean}
     */
    function isEmailValid(value) {
        return !isEmpty(value) && value.includes('@');
    }

    /**
     * returns true if value is valid
     * returns false if value is not valid
     * @returns {boolean}
     */
    function isMinLengthValid(value, minLength) {
        debugger;
        return !isEmpty(value) && value.length >= minLength;
    }

    function showErrorMessage(formInput, message) {
        let errorMessageId = generateErrorMessageId(formInput);
        let errorMessage = document.getElementById(errorMessageId);
        if (errorMessage == null) {
            message = message || `Enter a valid ${formInput.name}`;

            errorMessage = document.createElement('div');
            errorMessage.id = errorMessageId;
            errorMessage.className = 'contact-wrapper__error-message';
            errorMessage.innerHTML = `<p>${message}</p> <i class="fa fa-ban" aria-hidden="true"></i>`;
            formInput.parentElement.insertBefore(errorMessage, formInput.nextSibling);
        }
    }

    function hideErrorMessage(formInput) {
        let errorMessageId = generateErrorMessageId(formInput);
        let errorMessage = document.getElementById(errorMessageId);
        if (errorMessage != null) {
            errorMessage.remove();
        }
    }

    function generateErrorMessageId(formInput) {
        return `${formInput.id}:${formInput.name}`;
    }

});

