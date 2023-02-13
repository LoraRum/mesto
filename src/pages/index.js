import './index.css';

import Card from '../Card.js';
import {initialCards, validationConfig} from '../constants.js';
import {closePopup, openPopupUserProfile, openPopupNewPlace, openPopupFullscreen} from '../popups.js';
import FormValidator from '../FormValidator.js';
import Section  from '../Section.js';
import Popup from '../Popup.js';

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

const userProfileFormValidator = new FormValidator(userProfileForm, validationConfig);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);

userProfileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

function populateUserProfileForm() {
    userProfilePopupName.value = userProfileName.textContent;
    userProfilePopupAbout.value = userProfileAbout.textContent;
}

function handleUserProfileFormSubmit(event) {
    event.preventDefault();
    userProfileName.textContent = userProfilePopupName.value;
    userProfileAbout.textContent = userProfilePopupAbout.value;
    userProfilePopup.close();
}

function handleNewPlaceFormSubmit(event) {
    event.preventDefault();
    const cardData = {
        name: newPlacePopupName.value,
        link: newPlacePopupAbout.value
    };
    const card = createCard(cardData);
    groupsElement.prepend(card);
    newPlacePopup.close();
    newPlaceForm.reset();
    newPlaceFormValidator.disableSubmitButton();
}
function createCard(cardData) {
    const card = new Card(cardData, '#card-template');
    return card.getCard();
}


const groupsSection = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card (item, '#card-template');
        return card.getCard();
    }
},  '.groups');



userProfileButton.addEventListener('click', openPopupUserProfile);
popupNewPlaceButton.add;

userProfileButton.addEventListener('click', openPopupUserProfile);
popupNewPlaceButton.addEventListener('click', openPopupNewPlace);
userProfileForm.addEventListener('submit', handleUserProfileFormSubmit);
newPlaceForm.addEventListener('submit', handleNewPlaceFormSubmit);

initialCards.forEach(function(cardData) {
    const card = createCard(cardData);
    groupsElement.appendChild(card);
});

populateUserProfileForm();
