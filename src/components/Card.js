class Card {
    constructor(templateSelector, cardData, {onImageClick, onDeleteButtonClick}) {
        this._cardData = cardData;
        this._templateSelector = templateSelector;
        this._handleCardClick = onImageClick;
        this._handleDeleteButtonClick = onDeleteButtonClick;
        this._cardElement = this._getTemplate();
        this._imageElement = this._cardElement.querySelector('.group__image');
        this._likeElement = this._cardElement.querySelector('.group__like');
        this._textElement = this._cardElement.querySelector('.group__text');
        this._likesElement = this._cardElement.querySelector('.group__like-sum');

        this._populateTemplate();
        this._setEventListeners();
    }

    render() {
        return this._cardElement;
    }


    _populateTemplate() {
        this._textElement.textContent = this._cardData.name;
        this._imageElement.src = this._cardData.link;
        this._imageElement.alt = this._cardData.name;
        this._likesElement.textContent = this._cardData.likes.length;
    }

    _handleRemove() {
        this._handleDeleteButtonClick();
        //this._cardElement.remove();
    }

    _handleLike() {
        this._likeElement.classList.toggle('group__like_active');
    }

    _handlePopup() {
        this._handleCardClick();
    }

    _setEventListeners() {
        this._cardElement.querySelector('.group__remove').addEventListener('click', this._handleRemove.bind(this));
        this._likeElement.addEventListener('click', this._handleLike.bind(this));
        this._imageElement.addEventListener('click', this._handlePopup.bind(this));
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.group');
        return cardTemplate.cloneNode(true);
    }
}

export default Card;
