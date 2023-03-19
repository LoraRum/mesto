import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {onSubmit, onOpen}) {
        super(popupSelector);
        this._onSubmit = onSubmit;
        this._onOpen = onOpen;
        this._form = this._popupElement.querySelector(".form__form");
        this._inputList = this._form.querySelectorAll('input');
        this._buttonSave = this._form.querySelector(".form__save");
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _getInputValues() {
        const values = {};
        this._inputList.forEach((input) => {
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
        this._buttonSave.textContent = "Сохранение...";
        this._onSubmit(inputValues).then(() => {
            this._buttonSave.textContent = "Сохранить";
            this.close();
        });
    }

    open() {
        super.open();
        if (typeof this._onOpen === 'function') {
            this._onOpen()
        }
    }

    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm;
