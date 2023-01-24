// new place
const newPlacePopup = document.querySelector('#popup-new-place');
const newPlacePopupContainer = newPlacePopup.querySelector('.popup__container');
const newPlacePopupCloseButton = newPlacePopup.querySelector('.popup__close');

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

let currentPopup;
export function openPopupUserProfile() {
    openPopup(userProfilePopup);
}

function closePopupUserProfile() {
    closePopup(userProfilePopup);
}

export function openPopupNewPlace() {
    openPopup(newPlacePopup);
}

function closePopupNewPlace() {
    closePopup(newPlacePopup);
}

export function openPopupFullscreen(cardData) {
    fullscreenImage.src = cardData.link;
    fullscreenImage.alt = cardData.name;
    fullscreenImageName.textContent = cardData.name;
    openPopup(fullscreenImagePopup);
}

function closePopupFullscreen() {
    closePopup(fullscreenImagePopup);
}

function openPopup(popup) {
    currentPopup = popup;
    popup.classList.add('popup_opened');

    document.addEventListener('keydown', handleEscapeKeydown);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscapeKeydown);
}

function handleEscapeKeydown(e) {
    if (e.key === 'Escape') {
        closePopup(currentPopup);
    }
}

function stopEventPropagation(event) {
    event.stopPropagation();
}

newPlacePopup.addEventListener('click', closePopupNewPlace);
newPlacePopupContainer.addEventListener('click', stopEventPropagation);
newPlacePopupCloseButton.addEventListener('click', closePopupNewPlace);

fullscreenImagePopup.addEventListener('click', closePopupFullscreen);
fullscreenImagePopupContainer.addEventListener('click', stopEventPropagation);
fullscreenImagePopupCloseButton.addEventListener('click', closePopupFullscreen);

userProfilePopup.addEventListener('click', closePopupUserProfile);
userProfilePopupContainer.addEventListener('click', stopEventPropagation);
userProfilePopupCloseButton.addEventListener('click', closePopupUserProfile)
