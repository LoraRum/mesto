class Card {
    constructor(
        templateSelector,
        cardData,
        userId,
        {onLike, onDelete},
        popupFullScreen,
        popupDeleteConfirmation,

    ) {
        this._templateSelector = templateSelector;
        this._userId = userId;
        this._popupFullScreen = popupFullScreen;
        this._popupDeleteConfirmation = popupDeleteConfirmation;
        this.onLike = onLike;
        this.onDelete = onDelete;
        this._cardElement = this._getTemplate();
        this._imageElement = this._cardElement.querySelector(".group__image");
        this._likeElement = this._cardElement.querySelector(".group__like");
        this._textElement = this._cardElement.querySelector(".group__text");
        this._likesElement =
            this._cardElement.querySelector(".group__like-sum");
        this._buttonElement = this._cardElement.querySelector(".group__remove");

        this.setCardData(cardData);
        this._setEventListeners();
    }

    render() {
        return this._cardElement;
    }

    setCardData(cardData) {
        this._cardData = cardData;
        this._textElement.textContent = this._cardData.name;
        this._imageElement.src = this._cardData.link;
        this._imageElement.alt = this._cardData.name;
        this._likesElement.textContent = this._cardData.likes.length;

        const userId = this._userId.getId();

        if (this._hasOwnLike()) {
            this._likeElement.classList.add("group__like_active");
        } else {
            this._likeElement.classList.remove("group__like_active");
        }

        if (userId !== this._cardData.owner._id) {
            this._buttonElement.remove();
        }
    }

    _handleRemove() {
        this._popupDeleteConfirmation.setOnSubmit(() => {
            this.onDelete(this._cardData._id);
            this._cardElement.remove();
        });
        this._popupDeleteConfirmation.open();
    }

    _handleLike() {
        if (this._hasOwnLike()) {
            this.onLike(false, this._cardData._id);
            this.setCardData(this._cardData);
        } else {
            this.onLike(true, this._cardData._id);
            this.setCardData(this._cardData);
        }
    }

    _hasOwnLike() {
        const userId = this._userId.getId();
        return this._cardData.likes.some((like) => {
            return like._id === userId;
        });
    }
    _handlePopup() {
        this._popupFullScreen.open(this._cardData);
    }

    _setEventListeners() {
        this._buttonElement.addEventListener(
            "click",
            this._handleRemove.bind(this)
        );
        this._likeElement.addEventListener(
            "click",
            this._handleLike.bind(this)
        );
        this._imageElement.addEventListener(
            "click",
            this._handlePopup.bind(this)
        );
    }

    _getTemplate() {
        const cardTemplate = document
            .querySelector(this._templateSelector)
            .content.querySelector(".group");
        return cardTemplate.cloneNode(true);
    }
}

export default Card;
