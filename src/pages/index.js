import './index.css';

import Card from '../components/Card.js';
import {initialCards, validationConfig} from '../constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import UserAvatar from '../components/UserAvatar.js';

const userProfileButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');
const avatarImageButton = document.querySelector('.avatar');
const userProfileForm = document.querySelector('#popup-user-profile .form__form');
const newPlaceForm = document.querySelector('#popup-new-place .form__form');
const avatarImageForm = document.querySelector(
    '#popup-change-avatar .form__form');
const userNameInput = userProfileForm.querySelector('#username');
const userAboutInput = userProfileForm.querySelector('#about');
const avatarImageInput = avatarImageForm.querySelector('#avatar');

const userAvatar = new UserAvatar({avatarSelector: '.avatar__image'});

const userProfileFormValidator = new FormValidator(userProfileForm,
    validationConfig,
);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);

const popupUserProfile = new PopupWithForm('#popup-user-profile', {
    onSubmit: (data) => {
        userInfo.setUserInfo(data);
    },
    onOpen: () => {
        userProfileFormValidator.disableSubmitButton();
        const {about, username} = userInfo.getUserInfo();
        userNameInput.value = username;
        userAboutInput.value = about;
    },
});
const popupNewPlace = new PopupWithForm('#popup-new-place', {
    onSubmit: handleNewPlaceFormSubmit, onOpen: () => {
        newPlaceFormValidator.disableSubmitButton();
    },
});
const popupAvatarImage = new PopupWithForm('#popup-change-avatar', {
    onSubmit: (inputValues) => {
        fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me/avatar', {
            method: 'PATCH', headers: {
                authorization: '6059afea-f832-4b2c-a73d-15748b82d9cd',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                avatar: inputValues.avatar,
            }),
        });
    }, onOpen: () => {
        const {link} = userAvatar.getUserAvatar();
        avatarImageInput.value = link;
    },
});

const popupFullScreen = new PopupWithImage('#popup-fullscreen');
const cardsSection = new Section({items: initialCards, renderer: createCard},
    '.groups',
);
const userInfo = new UserInfo({
    userNameSelector: '.profile__title', aboutSelector: '.profile__subtitle',
});

userProfileButton.addEventListener('click', popupUserProfile.open);

newPlaceButton.addEventListener('click', popupNewPlace.open);

avatarImageButton.addEventListener('click', popupAvatarImage.open);

userProfileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

popupUserProfile.setEventListeners();
popupNewPlace.setEventListeners();
popupFullScreen.setEventListeners();
popupAvatarImage.setEventListeners();

function createCard(cardData) {
    const card = new Card('#card-template',
        cardData,
        popupFullScreen.open.bind(popupFullScreen, cardData),
    );
    return card.render();
}

function handleNewPlaceFormSubmit(data) {
    cardsSection.addItem(data);
}

