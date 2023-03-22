import Popup from "./Popup.js";

class PopupConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupElement.querySelector(".form__form");
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._handleSubmit);
    }

    _handleSubmit(evt) {
        evt.preventDefault();

        if (typeof this._onSubmit === "function") {
            this._onSubmit();
        }

        this.close();
    }

    async _handleSubmit(evt) {
        evt.preventDefault();

        if (typeof this._onSubmit === "function") {
            const response = await fetch;
            if (response.ok) {
                this._onSubmit();
                this.close();
            } else {
                const errorData = await response.json();
                console.error(errorData.error);
            }
        }
    }

    setOnSubmit(onSubmit) {
        this._onSubmit = onSubmit;
    }

    open() {
        super.open();
        if (typeof this._onOpen === "function") {
            this._onOpen();
        }
    }
}

export default PopupConfirmation;
