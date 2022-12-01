const profileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const popupSave = document.querySelector('.popup__save');

//Открыть попап

profileButton.addEventListener('click', openPopup)

function openPopup() {
    popup.classList.add('popup_opened');
}

//Закрыть попап

popupClose.addEventListener('click', closePopup)

function closePopup() {
    popup.classList.remove('popup_opened');
}

//Закрыть попап нажатием на экран

popup.addEventListener('click', function (event) {
    closePopup();
});
popupContainer.addEventListener('click', function (event) {
    event.stopPropagation()
});

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type-name');
let jobInput = formElement.querySelector('.popup__input_type-about');

let name = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function handleFormSubmit(event) {
    event.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
