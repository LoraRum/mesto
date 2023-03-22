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

    async _handleSubmit(evt) {
        evt.preventDefault();

        if (typeof this._onSubmit === "function") {
            const response = await this._onSubmit();
            if (response && response.status === 200) {
                this.close();
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
