function showInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(config.inputClassError);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(config.inputClassError);
    errorElement.textContent = '';
    inputElement.classList.remove(config.errorClass);
}

function checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonClass);
    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
}
