import { formList } from './index.js';
import { initialCards, selectors, formConfig } from './data.js';

export class FormValidator {
    constructor(validationConfing, form) {
        this._buttonSubmitFormDisabledName = validationConfing.buttonSubmitFormDisabledName;
        this._form = form;
        this._inputList = Array.from(form.querySelectorAll(validationConfing.formInput));
        this._formSubmitButton = this._form.querySelector(validationConfing.buttonSubmitForm);
    }

    //установка слушателя только одной формы (вызор вспомогательной функции)
    enableValidationForm() {
        this._setEventListeners();
        this._disableButton();
    }

    //установка слушателя на все инпуты формы (вспомогательная функция)
    //работа c конкретной формой
    _setEventListeners() {
        this._inputList.forEach((element) => {
            element.addEventListener('input', () => {
                this._toggleButtonState();
                //console.log(element.id);
                this._showValidationMessage(element);
            });
        });
    }

    // изменение состояния кнопки
    // если есть хотя бы один невалидный инпут в форме - кнопка неактивна
    _toggleButtonState() {
        if (this._isInputInvalid()) {
            this._disableButton();
        }
        else {
            this._formSubmitButton.classList.remove(this._buttonSubmitFormDisabledName);
            this._formSubmitButton.removeAttribute('disabled', 'disabled');
        }
    }

    //обход массива на валидность всех элементов
    //если хотя бы один элемент массива не валиден, функция возвращает true
    _isInputInvalid() {
        return this._inputList.some((element) => {
            return !element.validity.valid;
        })
    }

    //работа с текстом ошибок валидации - отображение и скрытие
    _showValidationMessage(e) {
        const formError = document.querySelector(`.popup__span-error_type_${e.id}`);

        if (e.isInputInvalid) {
            formError.textContent = e.validationMessage;
        }
        else {
            formError.textContent = e.validationMessage;
        }
    }

    _disableButton() {
        this._formSubmitButton.classList.add(this._buttonSubmitFormDisabledName);
        this._formSubmitButton.setAttribute('disabled', 'disabled');
    }

}

// formList.forEach((item) => {
//     const fv = new FormValidator(formConfig, item);
//     fv.enableValidationForm();
//   })

