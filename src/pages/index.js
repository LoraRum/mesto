import './index.css';

import Card from '../components/Card.js';
import {initialCards, validationConfig} from '../constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userProfileButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');
const avatarImageButton = document.querySelector('.avatar')
const userProfileForm = document.querySelector('#popup-user-profile .form__form');
const newPlaceForm = document.querySelector('#popup-new-place .form__form');
const avatarImageForm = document.querySelector('#avatar .form__form')
const userNameInput = userProfileForm.querySelector('#username');
const userAboutInput = userProfileForm.querySelector('#about');

const userProfileFormValidator = new FormValidator(userProfileForm, validationConfig);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);

const popupUserProfile = new PopupWithForm('#popup-user-profile', {onSubmit: handleUserProfileFormSubmit});
const popupNewPlace = new PopupWithForm('#popup-new-place', {onSubmit: handleNewPlaceFormSubmit});
const popupAvatarImage = new PopupWithForm('#popup-change-avatar', {
    onSubmit: () => {

        fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '6059afea-f832-4b2c-a73d-15748b82d9cd',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: ''
            })
        });

    }
});
const popupFullScreen = new PopupWithImage('#popup-fullscreen');
const cardsSection = new Section({items: initialCards, renderer: createCard}, '.groups');
const userInfo = new UserInfo({
    userNameSelector: '.profile__title', aboutSelector: '.profile__subtitle',
});

userProfileButton.addEventListener('click', () => {
    fillUserProfileForm();
    userProfileFormValidator.disableSubmitButton();
    popupUserProfile.open();
});

newPlaceButton.addEventListener('click', () => {
    newPlaceFormValidator.disableSubmitButton();
    popupNewPlace.open();
});

avatarImageButton.addEventListener('click', () => {
    popupAvatarImage.open();
});


userProfileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();


popupUserProfile.setEventListeners();
popupNewPlace.setEventListeners();
popupFullScreen.setEventListeners();
popupAvatarImage.setEventListeners()


function fillUserProfileForm() {
    const {about, username} = userInfo.getUserInfo();
    userNameInput.value = username;
    userAboutInput.value = about;
}

function createCard(cardData) {
    const card = new Card('#card-template', cardData, popupFullScreen.open.bind(popupFullScreen, cardData));
    return card.render();
}

function handleUserProfileFormSubmit(data) {
    userInfo.setUserInfo(data);
}

function handleNewPlaceFormSubmit(data) {
    cardsSection.addItem(data);
}



