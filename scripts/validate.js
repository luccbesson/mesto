//обход массива на валидность всех элементов
//если хотя бы один элемент массива не валиден, функция возвращает true
function isInputInvalid(inputList) {
    return inputList.some((element) => {
        //console.log(element.value);
        return !element.validity.valid;
    })
}

// изменение состояния кнопки
// если есть хотя бы один невалидный инпут в форме - кнопка неактивна
function toggleButtonState(inputList, button) {
    if (isInputInvalid(inputList)) {
        //button.classList.add(form.buttonSubmitFormDisabledName);
        //button.setAttribute('disabled', 'disabled');
        disableButton (button);
        //console.log('есть невалидный инпут, кнопка деактивирована');
    }
    else {
        button.classList.remove(form.buttonSubmitFormDisabledName);
        button.removeAttribute('disabled');
        //console.log('все инпуты корректные, кнопка активирована');
    }
}

function disableButton(button) {
    button.classList.add(form.buttonSubmitFormDisabledName);
    button.setAttribute('disabled', 'disabled');
}

//установка слушателя для всех форм (перебор форм и вызор вспомогательной функции)
function enableValidation(object) {
    //console.log(formList);
    formList.forEach((element) => {
        //console.log(element);
        setEventListeners(element, object);
    });
}

//установка слушателя на все инпуты формы (вспомогательная функция)
function setEventListeners(form, object) {
    //работа c конкретной формой
    //console.log(form);
    const inputList = Array.from(form.querySelectorAll(object.formInput));
    //console.log(inputList);
    const button = form.querySelector(object.buttonSubmitForm);
    //console.log(button);
    //toggleButtonState(inputList, button);

    inputList.forEach((element) => {
        element.addEventListener('input', function () {
            toggleButtonState(inputList, button);
            showValidationMessage(element);
        });
    });
}

//работа с текстом ошибок валидации - отображение и скрытие
function showValidationMessage(formInput) {
    const formError = document.querySelector(`.popup__span-error_type_${formInput.id}`);
    if (formInput.isInputInvalid) {
        //console.log(formInput.validationMessage);
        //console.log(formError);
        formError.textContent = formInput.validationMessage;
    }
    else {
        //console.log(formInput.validationMessage);
        //const formError = document.querySelector(`.popup__span-error_type_${formInput.id}`);
        //console.log(formError);
        formError.textContent = formInput.validationMessage;
    }
}

enableValidation(form); 