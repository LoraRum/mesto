const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    }, {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    }, {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    }, {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    }, {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    }, {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    },
];
const userProfileButton = document.querySelector('.profile__edit-button');
const popupNewPlaceButton = document.querySelector('.profile__add-button');
const groupsElement = document.querySelector('.groups');

const userProfileName = document.querySelector('.profile__title');
const userProfileAbout = document.querySelector('.profile__subtitle');

// new place
const newPlacePopup = document.querySelector('#popup-new-place');
const newPlacePopupContainer = newPlacePopup.querySelector('.popup__container');
const newPlacePopupCloseButton = newPlacePopup.querySelector('.popup__close');
const newPlaceForm = newPlacePopup.querySelector('.form__form');
const newPlacePopupName = newPlacePopup.querySelector('.input_type_name');
const newPlacePopupAbout = newPlacePopup.querySelector('.input_type_link');

// full screen
const fullscreenImagePopup = document.querySelector('#popup-fullscreen');
const fullscreenImagePopupContainer = fullscreenImagePopup.querySelector('.popup__container');
const fullscreenImagePopupCloseButton = fullscreenImagePopup.querySelector('.popup__close');
const fullscreenImage = fullscreenImagePopup.querySelector('.fullscreen-image__image');
const fullscreenImageName = fullscreenImagePopup.querySelector('.fullscreen-image__text');

// user profile
const userProfilePopup = document.querySelector('#popup-user-profile');
const userProfilePopupContainer = userProfilePopup.querySelector('.popup__container');
const userProfilePopupCloseButton = userProfilePopup.querySelector('.popup__close');
const userProfilePopupName = userProfilePopup.querySelector('.input_type_name');
const userProfilePopupAbout = userProfilePopup.querySelector('.input_type_about');
const userProfileForm = userProfilePopup.querySelector('.form__form');

function openPopupUserProfile() {
    userProfilePopupName.value = userProfileName.textContent;
    userProfilePopupAbout.value = userProfileAbout.textContent;
    openPopup(userProfilePopup);
}

function closePopupUserProfile() {
    closePopup(userProfilePopup);
}

function openPopupNewPlace() {
    openPopup(newPlacePopup);
}

function closePopupNewPlace() {
    closePopup(newPlacePopup);
}

function openPopupFullscreen(cardData) {
    fullscreenImage.src = cardData.link;
    fullscreenImage.alt = cardData.name;
    fullscreenImageName.textContent = cardData.name;
    openPopup(fullscreenImagePopup);
}

function closePopupFullscreen() {
    closePopup(fullscreenImagePopup);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
        name: newPlacePopupName.value, link: newPlacePopupAbout.value, like: false,
    });
    groupsElement.prepend(cardElement);
    closePopup(newPlacePopup);
}

function createCard(cardData) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.group').cloneNode(true);
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

function stopEventPropagation(event) {
    event.stopPropagation();
}

userProfileButton.addEventListener('click', openPopupUserProfile);
popupNewPlaceButton.addEventListener('click', openPopupNewPlace);
userProfileForm.addEventListener('submit', handleUserProfileFormSubmit);
newPlaceForm.addEventListener('submit', handleNewPlaceFormSubmit);

newPlacePopup.addEventListener('click', closePopupNewPlace);
newPlacePopupContainer.addEventListener('click', stopEventPropagation);
newPlacePopupCloseButton.addEventListener('click', closePopupNewPlace);

fullscreenImagePopup.addEventListener('click', closePopupFullscreen);
fullscreenImagePopupContainer.addEventListener('click', stopEventPropagation);
fullscreenImagePopupCloseButton.addEventListener('click', closePopupFullscreen);

userProfilePopup.addEventListener('click', closePopupUserProfile);
userProfilePopupContainer.addEventListener('click', stopEventPropagation);
userProfilePopupCloseButton.addEventListener('click', closePopupUserProfile);

initialCards.forEach(function(cardData) {
    const cardElement = createCard(cardData);
    groupsElement.appendChild(cardElement);
});


// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

