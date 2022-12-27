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
const name = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

function openPopupUser() {
    const formElement = createUserForm({
        name: name.textContent, about: about.textContent,
    });

    openPopup(formElement);
}

function openPopupCard() {
    const formElement = createNewPlaceForm();
    openPopup(formElement);
}

function openPopup(content) {
    const popupElement = document.querySelector('.popup');
    popupElement.querySelector('.popup__content').replaceChildren(content);
    popupElement.classList.add('popup_opened');
}

function closePopup() {
    const popupElement = document.querySelector('.popup');
    popupElement.classList.remove('popup_opened');
}

function createPopup() {
    const popupTemplate = document.querySelector('#popup-template').content;
    const popupElement = popupTemplate.querySelector('.popup').cloneNode(true);
    const popupContainer = popupElement.querySelector('.popup__container');

    popupElement.querySelector('.popup__close').addEventListener('click', function() {
        popupElement.classList.remove('popup_opened');
    });
    popupElement.addEventListener('click', function() {
        popupElement.classList.remove('popup_opened');
    });
    popupContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    return popupElement;
}

function createNewPlaceForm() {
    const addPlaceFormTemplate = document.querySelector('#add-place-form-template').content;
    const formElement = addPlaceFormTemplate.querySelector('.form').cloneNode(true);
    const form = formElement.querySelector('.form__form');
    const nameInputElement = formElement.querySelector('.input_type_name');
    const linkInputElement = formElement.querySelector('.input_type_link')

    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        const cardElement = createCard({
            name: nameInputElement.value,
            link: linkInputElement.value,
            like: false,
        });
        document.querySelector('.groups').prepend(cardElement);
        closePopup();
    }

    return formElement;
}

function createUserForm(userData) {
    const addPlaceFormTemplate = document.querySelector('#edit-user-form-template').content;
    const formElement = addPlaceFormTemplate.querySelector('.form').cloneNode(true);
    const nameInputElement = formElement.querySelector('.input_type_name');
    const aboutInputElement = formElement.querySelector('.input_type_about');
    const form = formElement.querySelector('.form__form');

    nameInputElement.value = userData.name;
    aboutInputElement.value = userData.about;

    form.addEventListener('submit', handleFormSubmit);

    // Обработчик «отправки» формы
    function handleFormSubmit(event) {
        event.preventDefault();
        name.textContent = nameInputElement.value;
        about.textContent = aboutInputElement.value;
        closePopup();
    }

    return formElement;
}

function createCard(cardData) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.group').cloneNode(true);
    cardElement.querySelector('.group__text').textContent = cardData.name;
    cardElement.querySelector('.group__image').src = cardData.link;

    if (cardData.like === true) {
        cardElement.querySelector('.group__like').classList.add('group__like_active');
    }

    cardElement.querySelector('.group__remove').addEventListener('click', function() {
        cardElement.remove();
    });

    cardElement.querySelector('.group__like').addEventListener('click', function() {
        cardElement.querySelector('.group__like').classList.toggle('group__like_active');
    });

    return cardElement;
}

const profileButton = document.querySelector('.profile__edit-button');
const popupNewCard = document.querySelector('.profile__add-button');

//Открыть попап
profileButton.addEventListener('click', openPopupUser);
popupNewCard.addEventListener('click', openPopupCard);

initialCards.forEach(function(cardData) {
    const cardElement = createCard(cardData);
    document.querySelector('.groups').appendChild(cardElement);
});

const editUserPopupElement = createPopup();
document.body.appendChild(editUserPopupElement);
