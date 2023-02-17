class FormValidator {
    constructor(formElement, config) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = formElement.querySelector(this._config.submitButtonClass);
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.add(this._config.inputClassError);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._config.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._config.inputClassError);
        errorElement.textContent = '';
        inputElement.classList.remove(this._config.errorClass);
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableSubmitButton();
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    disableSubmitButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    enableValidation() {
        this._setEventListeners(this._formElement);
    }
}

export default FormValidator;
