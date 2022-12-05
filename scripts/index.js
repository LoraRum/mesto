const profileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const popupSave = document.querySelector('.popup__save');
// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.input_tape_name');
let jobInput = formElement.querySelector('.input_tape_about');

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
    popup.classList.add('popup__opened');
    nameInput.value = name.textContent;
    jobInput.value = about.textContent;
}

function closePopup() {
    popup.classList.remove('popup__opened');
}

// Обработчик «отправки» формы
function handleFormSubmit(event) {
    event.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = jobInput.value;
    closePopup();
}
