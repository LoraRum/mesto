import "./index.css";

import Card from "../components/Card.js";
import { validationConfig } from "../constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
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


const userProfileFormValidator = new FormValidator(
    userProfileForm,
    validationConfig
);
const newPlaceFormValidator = new FormValidator(newPlaceForm, validationConfig);
const userAvatarFormValidator = new FormValidator(avatarImageForm, validationConfig)

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
    headers: {
        authorization: "6059afea-f832-4b2c-a73d-15748b82d9cd",
        "Content-Type": "application/json",
    },
});

const popupUserProfile = new PopupWithForm("#popup-user-profile", {
    onSubmit: (data, buttonSave) => {
        if (buttonSave) {
            buttonSave.textContent = "Сохранение...";
        }
        return api.updateUserInfo({
            name: data.username,
            about: data.about,
        }).then((res) => {
            userInfo.setUserInfo({
                username: res.name,
                about: res.about,
            });
            popupUserProfile.close();
        }).catch((err) => {
            console.error(`Error updating user info: ${err}`);
        }).finally(() => {
            if (buttonSave) {
                buttonSave.textContent = "Сохранить";
            }
        });
    },
    onOpen: () => {
        userProfileFormValidator.disableSubmitButton();
        const { about, username } = userInfo.getUserInfo();
        userNameInput.value = username;
        userAboutInput.value = about;
        userProfileFormValidator.checkSubmitButton();
    },
});
const popupNewPlace = new PopupWithForm("#popup-new-place", {
    onSubmit: (data, buttonSave) => {
        if (buttonSave) {
            buttonSave.textContent = "Сохранение...";
        }
        return api.addCard(data).then((cardData) => {
            cardsSection.addItem(cardData);
        })
            .catch((err) => {
                console.error(`Error adding new card: ${err}`);
            }).finally(() => {
                if (buttonSave) {
                    buttonSave.textContent = "Создать";
                }
            });
    },
    onOpen: () => {
        newPlaceFormValidator.disableSubmitButton();
    },
});

const popupAvatarImage = new PopupWithForm("#popup-change-avatar", {
        onSubmit: (data, buttonSave) => {
            if (buttonSave) {
                buttonSave.textContent = "Сохранение...";
            }
        return  api.editAvatar({
            avatar: data.avatar,
        }).then((data) => {
            userInfo.getAvatar(data.avatar);
            popupAvatarImage.close();
        })
            .catch((err) => {
                console.error(`Error updating avatar: ${err}`);
            }).finally(() => {
                    if (buttonSave) {
                        buttonSave.textContent = "Сохранить";
                    }
            });
    },
    onOpen: () => {
        userAvatarFormValidator.disableSubmitButton();
        const {} = userInfo.getAvatar();
        avatarImageInput.value = "";
        userAvatarFormValidator.checkSubmitButton();
    },
});

const popupFullScreen = new PopupWithImage("#popup-fullscreen");
const popupDeleteConfirmation = new PopupConfirmation("#popup-delete-card");

const userInfo = new UserInfo({
    userNameSelector: ".profile__title",
    aboutSelector: ".profile__subtitle",
    avatarSelector: ".avatar__image",
});

const userid = userInfo.getId();

Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
])
    .then(([user, cards]) => {
        userInfo.setUserInfo({ username: user.name, about: user.about });
        userInfo.setAvatar({ avatar: user.avatar });
        userInfo.setId(user._id);

        cards.forEach((cardData) => {
            cardsSection.addItem(cardData);
        });
    })
    .catch((err) => {
        console.log(err);
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
userAvatarFormValidator.enableValidation();

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


