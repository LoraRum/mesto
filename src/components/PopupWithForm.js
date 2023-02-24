import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {onSubmit}) {
        super(popupSelector);
        this._onSubmit = onSubmit;
        this._form = this._popupElement.querySelector('.form__form');
        this._handleSubmit = this._handleSubmit.bind(this);
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
        this._form.addEventListener('submit', this._handleSubmit);
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        const inputValues = this._getInputValues();
        this._onSubmit(inputValues);
        this.close();
    }

    close() {
        super.close();
        this._form.reset();
    }

    open() {
        super.open();

    }
}

export default PopupWithForm;
