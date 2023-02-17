import './index.css';

import Card from '../components/Card.js';
import {initialCards, validationConfig} from '../constants.js';
import FormValidator from '../FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userProfileButton = document.querySelector('.profile__edit-button');
const popupNewPlaceButton = document.querySelector('.profile__add-button');
const newPlaceForm = document.querySelector('#popup-new-place .form__form');
const userProfileForm = document.querySelector('#popup-user-profile .form__form');

const userProfileFormValidator = new FormValidator(userProfileForm, validationConfig);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);

userProfileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

const popupUserProfile = new PopupWithForm('#popup-user-profile', {handleSubmit: handleUserProfileFormSubmit});
const popupNewPlace = new PopupWithForm('#popup-new-place', {handleSubmit: handleNewPlaceFormSubmit});
const popupFullScreen = new PopupWithImage('#popup-fullscreen');
const cardsSection = new Section({items: initialCards, renderer: createCard}, '.groups');
const userInfo = new UserInfo({
    userNameSelector: '.profile__title', aboutSelector: '.profile__subtitle',
});

popupUserProfile.setEventListeners();
popupNewPlace.setEventListeners();
popupFullScreen.setEventListeners();

function createCard(cardData) {
    const card = new Card('#card-template', cardData, popupFullScreen.open.bind(popupFullScreen, cardData));
    return card.render();
}

function handleUserProfileFormSubmit(data) {
    userInfo.setUserInfo(data);
}

function handleNewPlaceFormSubmit(data) {
    const card = createCard(data);
    cardsSection.addItem(card);
}

userProfileButton.addEventListener('click', popupUserProfile.open);
popupNewPlaceButton.addEventListener('click', popupNewPlace.open);
