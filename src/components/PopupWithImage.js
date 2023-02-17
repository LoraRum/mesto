import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupElement.querySelector('.fullscreen-image__image');
        this._popupText = this._popupElement.querySelector('.fullscreen-image__text');
    }

    open({name, link}) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupText.textContent = name;
        super.open();
    }
}

export default PopupWithImage;
