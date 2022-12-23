const profileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const popupSave = document.querySelector('.popup__save');
const popupNewCard = document.querySelector('.profile__add-button')
// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.input_type_name');
let jobInput = formElement.querySelector('.input_type_about');

let name = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');

//Открыть попап
profileButton.addEventListener('click', openPopup)
//Закрыть попап
popupClose.addEventListener('click', closePopup)
//Закрыть попап нажатием на экран
popup.addEventListener('click', function (event) {
    closePopup();
});
popupContainer.addEventListener('click', function (event) {
    event.stopPropagation()
});
formElement.addEventListener('submit', handleFormSubmit);

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = about.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function handleFormSubmit(event) {
    event.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = jobInput.value;
    closePopup();
}

const initialCards = [{
    name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', like: false,
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
    name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', like: false,
}];

const cardTemplate = document.querySelector('#card-template');


function renderCard(card) {
    const cardElement = cardTemplate.content.cloneNode(true);
    cardElement.querySelector('.group__text').textContent = card.name;
    cardElement.querySelector('.group__image').src = card.link;

    if (card.like === true) {
        cardElement.querySelector('.group__like').classList.add('group__like_active');
    }
    return
}
document.querySelector('.groups').appendChild(cardElement);
initialCards.forEach(renderCard)



