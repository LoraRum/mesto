import "./index.css";

import Card from "../components/Card.js";
import { validationConfig } from "../constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import UserAvatar from "../components/UserAvatar.js";
import Api from "../components/Api.js";
import PopupConfirmation from "../components/PopupConfirmation";

const userProfileButton = document.querySelector(".profile__edit-button");
const newPlaceButton = document.querySelector(".profile__add-button");
const avatarImageButton = document.querySelector(".avatar");
const userProfileForm = document.querySelector(
    "#popup-user-profile .form__form"
);
const newPlaceForm = document.querySelector("#popup-new-place .form__form");
const avatarImageForm = document.querySelector(
    "#popup-change-avatar .form__form"
);
const userNameInput = userProfileForm.querySelector("#username");
const userAboutInput = userProfileForm.querySelector("#about");
const avatarImageInput = avatarImageForm.querySelector("#avatar");

const userAvatar = new UserAvatar({ avatarSelector: ".avatar__image" });

const userProfileFormValidator = new FormValidator(
    userProfileForm,
    validationConfig
);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
    headers: {
        authorization: "6059afea-f832-4b2c-a73d-15748b82d9cd",
        "Content-Type": "application/json",
    },
});

const popupUserProfile = new PopupWithForm("#popup-user-profile", {
    onSubmit: (data) => {
        api.updateUserInfo({
            name: data.username,
            about: data.about,
        }).then((res) => {
            userInfo.setUserInfo({
                username: res.name,
                about: res.about,
            });
            popupUserProfile.close();
        });
    },
    onOpen: () => {
        userProfileFormValidator.disableSubmitButton();
        const { about, username } = userInfo.getUserInfo();
        userNameInput.value = username;
        userAboutInput.value = about;
    },
});
const popupNewPlace = new PopupWithForm("#popup-new-place", {
    onSubmit: (data) => {
        api.addCard(data).then((cardData) => {
            cardsSection.addItem(cardData);
        });
    },
    onOpen: () => {
        newPlaceFormValidator.disableSubmitButton();
    },
});
const popupAvatarImage = new PopupWithForm("#popup-change-avatar", {
    onSubmit: (inputValues) => {
        api.editAvatar({
            avatar: inputValues.avatar,
        }).then((data) => {
            userAvatar.getUserAvatar(data);
            popupAvatarImage.close();
        });
    },
    onOpen: () => {
        const { link } = userAvatar.getUserAvatar();
        avatarImageInput.value = link;
    },
});

const popupFullScreen = new PopupWithImage("#popup-fullscreen");
const popupDeleteConfirmation = new PopupConfirmation("#popup-delete-card");

const userInfo = new UserInfo({
    userNameSelector: ".profile__title",
    aboutSelector: ".profile__subtitle",
});

const cardsSection = new Section(
    {
        items: [],
        renderer: createCard,
    },
    ".groups"
);

cardsSection.renderItems();

userProfileButton.addEventListener("click", popupUserProfile.open);
newPlaceButton.addEventListener("click", popupNewPlace.open);
avatarImageButton.addEventListener("click", popupAvatarImage.open);

userProfileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();
popupUserProfile.setEventListeners();
popupNewPlace.setEventListeners();
popupFullScreen.setEventListeners();
popupAvatarImage.setEventListeners();
popupDeleteConfirmation.setEventListeners();

function createCard(cardData) {
    const card = new Card(
        "#card-template",
        cardData,
        userInfo,
        api,
        popupFullScreen,
        popupDeleteConfirmation
    );
    return card.render();
}

api.getUserInfo().then((result) => {
    userAvatar.setUserAvatar({ link: result.avatar });
    userInfo.setUserInfo({ username: result.name, about: result.about });
    userInfo.setId(result._id);

    api.getInitialCards().then((result) => {
        result.forEach((cardData) => {
            cardsSection.addItem(cardData);
        });
    });
});
