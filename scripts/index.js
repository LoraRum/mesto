import Card from './Card.js';
import {initialCards, validationConfig} from './constants.js';
import {closePopup, openPopupUserProfile, openPopupNewPlace} from './popups.js';
import FormValidator from './FormValidator.js';

const userProfileButton = document.querySelector('.profile__edit-button');
const popupNewPlaceButton = document.querySelector('.profile__add-button');
const groupsElement = document.querySelector('.groups');
const userProfileName = document.querySelector('.profile__title');
const userProfileAbout = document.querySelector('.profile__subtitle');

// new place
const newPlacePopup = document.querySelector('#popup-new-place');
const newPlaceForm = newPlacePopup.querySelector('.form__form');
const newPlacePopupName = newPlacePopup.querySelector('.input_type_name');
const newPlacePopupAbout = newPlacePopup.querySelector('.input_type_link');

// user profile
const userProfilePopup = document.querySelector('#popup-user-profile');
const userProfilePopupName = userProfilePopup.querySelector('.input_type_name');
const userProfilePopupAbout = userProfilePopup.querySelector('.input_type_about');
const userProfileForm = userProfilePopup.querySelector('.form__form');


function populateUserProfileForm() {
    userProfilePopupName.value = userProfileName.textContent;
    userProfilePopupAbout.value = userProfileAbout.textContent;
}

function handleUserProfileFormSubmit(event) {
    event.preventDefault();
    userProfileName.textContent = userProfilePopupName.value;
    userProfileAbout.textContent = userProfilePopupAbout.value;
    closePopup(userProfilePopup);
}

function handleNewPlaceFormSubmit(event) {
    event.preventDefault();
    const cardData = {
        name: newPlacePopupName.value,
        link: newPlacePopupAbout.value
    };
    const card = createCard(cardData);
    groupsElement.prepend(card);
    closePopup(newPlacePopup);
}

function createCard(cardData) {
    const card = new Card(cardData, '#card-template');
    return card.getCard();
}

userProfileButton.addEventListener('click', openPopupUserProfile);
popupNewPlaceButton.addEventListener('click', openPopupNewPlace);
userProfileForm.addEventListener('submit', handleUserProfileFormSubmit);
newPlaceForm.addEventListener('submit', handleNewPlaceFormSubmit);

initialCards.forEach(function(cardData) {
    const card = createCard(cardData);
    groupsElement.appendChild(card);
});

populateUserProfileForm();

const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, validationConfig);

    validator.enableValidation();
});
