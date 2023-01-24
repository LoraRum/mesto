import {openPopupFullscreen} from './popups.js';

class Card {
    constructor(cardData) {
        this._cardData = cardData;
        const cardTemplate = document.querySelector('#card-template').content.querySelector('.group');
        this._cardElement = cardTemplate.cloneNode(true);
        this._imageElement = this._cardElement.querySelector('.group__image');
        this._likeElement = this._cardElement.querySelector('.group__like');
        this._cardElement.querySelector('.group__text').textContent = this._cardData.name;
        this._imageElement.src = this._cardData.link;
        this._imageElement.alt = this._cardData.name;

        this._cardElement.querySelector('.group__remove').addEventListener('click', this._handleRemove.bind(this));
        this._likeElement.addEventListener('click', this._handleLike.bind(this));
        this._imageElement.addEventListener('click', this._handlePopup.bind(this));
    }

    _handleRemove() {
        this._cardElement.remove();
    }

    _handleLike() {
        this._likeElement.classList.toggle('group__like_active');
    }

    _handlePopup() {
        openPopupFullscreen(this._cardData);
    }

    getCard() {
        return this._cardElement;
    }

}

export default Card;
