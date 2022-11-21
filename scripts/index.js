import { initialCards, selectors, formConfig } from './data.js';
import { Card } from './card.js';
import { FormValidator } from './formValidator.js';

//формы
const formList = Array.from(document.querySelectorAll(formConfig.formElement));
const formProfileEditElement = document.getElementById(selectors.formEditProfileID);
const formPhotoAddElement = document.getElementById(selectors.formAddPlaceSubmitID);

//попапы
const popupWindowPhoto = document.querySelector(selectors.photoPopup);
const popupWindowEditProfile = document.querySelector(selectors.profileEditPopup);
const popupWindowAddPhoto = document.querySelector(selectors.photoAddPopup);
const popupPhotoName = document.querySelector(selectors.popupPhotoName);
const popupPhotoLink = document.querySelector(selectors.popupPhotoLink);
const overlayList = Array.from(document.querySelectorAll(selectors.overlay));
const popupWindow = document.querySelector(selectors.popupWindow);

//кнопки
const btnEditProfileElement = document.getElementById(selectors.buttonEditProfileID);
const btnAddPlaceElement = document.getElementById(selectors.buttonAddPlaceID);
const btnCloseEditElement = document.getElementById(selectors.buttonCloseEditFormID);
const btnCloseAddElement = document.getElementById(selectors.buttonCloseAddFormID);
const btnClosePhotoElement = document.getElementById(selectors.buttonClosePhotoID);
const btnEditProfileSubmit = document.getElementById(selectors.butttonEditProfileSubmitID);
const btnAddPlaceSubmit = document.getElementById(selectors.buttonAddPlaceSubmitID);

//создание DOM объектов
export const cardsContainer = document.querySelector(selectors.cards);
const cardTemplate = document.querySelector(selectors.cardTemplate).content.querySelector(selectors.card);
const photo = document.querySelector(selectors.popupPhoto);
const title = document.querySelector(selectors.popupPhotoTitle);

//текущие (старые) значение поля профиля 
const nameOrigin = document.querySelector(selectors.profileNameOrigin);
const descriptionOrigin = document.querySelector(selectors.profileJobOrigin);
//новые значения поля профиля из попапа
const nameInput = document.querySelector(selectors.profileNameInput);
const jobInput = document.querySelector(selectors.profileJobInput);

//открыть попап-картинку в полном размере
function openPopup(popup) {
    popup.classList.add(selectors.popupOpenedName);
    document.addEventListener('keyup', ClosePopUpByEscape);

    if (popup.querySelector('.popup__form') !== null) {
        const fv = new FormValidator(formConfig, popup.querySelector('.popup__form'));
        fv.enableValidationForm();
    }
}

//закрыть попап
function closePopup(popup) {
    popup.classList.remove(selectors.popupOpenedName);
    document.removeEventListener('keydown', ClosePopUpByEscape);
}

//кнопка открытия формы редактирования профиля
function editProfileHandler() {
    nameInput.value = nameOrigin.textContent;
    jobInput.value = descriptionOrigin.textContent;
    openPopup(popupWindowEditProfile);
}
btnEditProfileElement.addEventListener('click', editProfileHandler);//

//конпка открытия формы долбавления фото в ленту
function addPhotoHandler() {
    popupPhotoName.value = '';
    popupPhotoLink.value = '';
    openPopup(popupWindowAddPhoto);
}
btnAddPlaceElement.addEventListener('click', addPhotoHandler);

//кнопка сохранения данных формы редактирования профиля
function editProfileFormSubmitHandler(evt) {
    //console.log('editProfileFormSubmitHandler');
    evt.preventDefault();
    nameOrigin.textContent = nameInput.value;
    descriptionOrigin.textContent = jobInput.value;
    closeEditHandler();
}
formProfileEditElement.addEventListener('submit', editProfileFormSubmitHandler);

//кнопка сохранения формы добавления фото в ленту
function addFormPhotoSubmitHandler(evt) {
    // console.log('addFormPhotoSubmitHandler');
    evt.preventDefault();
    const newPhotoName = popupPhotoName;
    const newPhotoLink = popupPhotoLink;
    const newCard = {
        name: newPhotoName.value,
        link: newPhotoLink.value
    };
    const card = new Card(newCard, '.cards-item-template');
    card.generateCard();
    closeAddHandler();
}
formPhotoAddElement.addEventListener('submit', addFormPhotoSubmitHandler);

//кнопка закрытия формы редактирования профиля
function closeEditHandler() {
    closePopup(popupWindowEditProfile);
}
btnCloseEditElement.addEventListener('click', closeEditHandler);

//кнопка закрытия формы добавления фото
function closeAddHandler() {
    closePopup(popupWindowAddPhoto);
}
btnCloseAddElement.addEventListener('click', closeAddHandler);

//кнопка закрытия попапа с фото
function closePhotoHandler() {
    closePopup(popupWindowPhoto);
}
btnClosePhotoElement.addEventListener('click', closePhotoHandler);

//закрытие попапа по нажатию клавиши Esc
function ClosePopUpByEscape(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        closeOpenedPopup();
    }
}

//закрытие попапа по клику на оверлей
function closePopUpByOverlayClick(evt) {
    const pop = document.querySelector('.popup__container');
    overlayList.forEach((element) => {

        if (evt.target === element) {
            closeOpenedPopup();
        }
    });
}
document.addEventListener('click', closePopUpByOverlayClick);

//закрытие открытого попапа
function closeOpenedPopup() {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup !== null) {
        closePopup(openedPopup);
    }


}

export { formList, openPopup, popupWindowPhoto, photo, title };


