import Card from './Card.js'
import initialCards from './initialCards.js';
import validationConfig from './constants.js';
import {closePopup, openPopupUserProfile, openPopupNewPlace} from './popups.js';
import {enableValidation} from './validate.js';

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

const cardTemplate = document.querySelector('#card-template').content.querySelector('.group');

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
    const cardElement = createCard({
        name: newPlacePopupName.value, link: newPlacePopupAbout.value,
    });
    groupsElement.prepend(cardElement);
    closePopup(newPlacePopup);
}

function createCard(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const imageElement = cardElement.querySelector('.group__image');
    const likeElement = cardElement.querySelector('.group__like');

    cardElement.querySelector('.group__text').textContent = cardData.name;
    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;

    cardElement.querySelector('.group__remove').addEventListener('click', function() {
        cardElement.remove();
    });

    likeElement.addEventListener('click', function() {
        likeElement.classList.toggle('group__like_active');
    });

    imageElement.addEventListener('click', function() {
        openPopupFullscreen(cardData);
    });

    return cardElement;
}

userProfileButton.addEventListener('click', openPopupUserProfile);
popupNewPlaceButton.addEventListener('click', openPopupNewPlace);
userProfileForm.addEventListener('submit', handleUserProfileFormSubmit);
newPlaceForm.addEventListener('submit', handleNewPlaceFormSubmit);

initialCards.forEach(function(cardData) {
    const cardElement = createCard(cardData);
    const card = new Card(cardData)
    groupsElement.appendChild(card.getCard());
});

populateUserProfileForm();
enableValidation(validationConfig);
