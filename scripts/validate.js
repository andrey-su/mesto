//функция включения отображения не ввалидного текста
function snowInputErrore(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage; 
    input.classList.add(config.inputErrorClass);
};

//функция выключения отображения не ввалидного текста
function hideInputErrore(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = ' '; 
    input.classList.remove(config.inputErrorClass);
};

//функция проверки валидности
function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        snowInputErrore(form, input, config);
    } else {
        hideInputErrore(form, input, config);
    }
};

//функция для кнопки  
function checkButtonActivity(button, isActive, config) {
    if(isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}


function setEventListeners (form, config) {
    const inputs = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            checkButtonActivity(submitButton, form.checkValidity(), config);
        });
    });
}


function enableValidation(config) {
    const  forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        const submitButton = form.querySelector(config.submitButtonSelector);
        checkButtonActivity(submitButton, form.checkValidity(), config);
    })
}


const validationConfig = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_no-active',
    inputErrorClass: '.popup__input_state_invalid'
}

enableValidation(validationConfig);







