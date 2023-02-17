import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popupElement.querySelector('.form__form');
        this._submitButton = this._form.querySelector('.form__save');
    }

    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('input'));
        const values = {};

        inputs.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._handleSubmit(inputValues);
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
        this.disableSubmitButton();
    }

    disableSubmitButton() {
        this._submitButton.disabled = true;
    }

    enableSubmitButton() {
        this._submitButton.disabled = false;
    }
}

export default PopupWithForm;
