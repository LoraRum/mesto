const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        like: false,
    }, {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        like: false,
    }, {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        like: false,
    }, {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        like: false,
    }, {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        like: false,
    }, {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        like: false,
    },
];
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

// full screen
const popupFullscreen = document.querySelector('#popup-fullscreen');
const fullscreenImage = popupFullscreen.querySelector('.fullscreen-image__image');
const fullscreenImageName = popupFullscreen.querySelector('.fullscreen-image__text');

// user profile
const userProfilePopup = document.querySelector('#popup-user-profile');
const userProfilePopupName = userProfilePopup.querySelector('.input_type_name');
const userProfilePopupAbout = userProfilePopup.querySelector('.input_type_about');
const userProfileForm = userProfilePopup.querySelector('.form__form');

function openPopupUserProfile() {
    userProfilePopupName.value = userProfileName.textContent;
    userProfilePopupAbout.value = userProfileAbout.textContent;
    openPopup(userProfilePopup);
}

function openPopupNewPlace() {
    openPopup(newPlacePopup);
}

function openPopupFullscreen(cardData) {
    fullscreenImage.src = cardData.link;
    fullscreenImage.alt = cardData.name;
    fullscreenImageName.textContent = cardData.name;
    openPopup(popupFullscreen);
}

function openPopup(popup) {
    const popupContainer = popup.querySelector('.popup__container');
    const closeButton = popup.querySelector('.popup__close');

    function close() {
        closePopup(popup);
    }

    function preventClick(event) {
        event.stopPropagation();
    }

    popup.addEventListener('click', close);
    popupContainer.addEventListener('click', preventClick);
    closeButton.addEventListener('click', close);

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
    cardElement.querySelector('.group__text').textContent = cardData.name;
    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;

    if (cardData.like === true) {
        cardElement.querySelector('.group__like').classList.add('group__like_active');
    }

    cardElement.querySelector('.group__remove').addEventListener('click', function() {
        cardElement.remove();
    });

    cardElement.querySelector('.group__like').addEventListener('click', function() {
        cardElement.querySelector('.group__like').classList.toggle('group__like_active');
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
    groupsElement.appendChild(cardElement);
});
