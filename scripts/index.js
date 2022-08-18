//формы
const formList = Array.from(document.querySelectorAll(form.formElement));
const formProfileEditElement = document.getElementById(selectors.formEditProfileID);
const formPhotoAddElement = document.getElementById(selectors.formAddPlaceSubmitID);

//попапы
const popupWindowPhoto = document.querySelector(selectors.photoPopup);
const popupWindowEditProfile = document.querySelector(selectors.profileEditPopup);
const popupWindowAddPhoto = document.querySelector(selectors.photoAddPopup);
const popupPhotoName = document.querySelector(selectors.popupPhotoName);
const popupPhotoLink = document.querySelector(selectors.popupPhotoLink);
const overlayList = Array.from(document.querySelectorAll(selectors.overlay));
// const overlayEditProfile = document.querySelector(selectors.overlayEditProfile);
// const overlayAddPhoto = document.querySelector(selectors.overlayAddPhoto);
// const overlayPhoto = document.querySelector(selectors.overlayPhoto);
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
const cardsContainer = document.querySelector(selectors.cards);
const cardTemplate = document.querySelector(selectors.cardTemplate).content.querySelector(selectors.card);
const photo = document.querySelector(selectors.popupPhoto);
const title = document.querySelector(selectors.popupPhotoTitle);

//текущие (старые) значение поля профиля 
const nameOrigin = document.querySelector(selectors.profileNameOrigin);
const descriptionOrigin = document.querySelector(selectors.profileJobOrigin);
//новые значения поля профиля из попапа
const nameInput = document.querySelector(selectors.profileNameInput);
const jobInput = document.querySelector(selectors.profileJobInput);



//рендер карточки
function createCard(object) {
    //создаем ноду из шаблона и рендерим карточки
    const cardElement = cardTemplate.cloneNode(true);
    const name = cardElement.querySelector(selectors.cardTitle);
    name.textContent = object.name;
    const image = cardElement.querySelector(selectors.cardPhoto);
    image.src = object.link;
    image.alt = object.name;

    //открытие картинки в полном размере
    image.addEventListener('click', function () {
        photo.src = object.link;
        photo.alt = object.name;
        title.textContent = object.name;
        openPopup(popupWindowPhoto);
    })

    //удаление фото
    const btnDel = cardElement.querySelector(selectors.buttonDelete);
    // btnDel.addEventListener('click', function () {
    //     cardElement.remove();
    // }
    // );
    function removeCard() {
        cardElement.remove();
    }
    btnDel.addEventListener('click', removeCard);

    //лайк фото
    const btnLike = cardElement.querySelector(selectors.buttonLike);
    // btnLike.addEventListener('click', function () {
    //     btnLike.classList.add(selectors.buttonLikeCheckedName);
    // });
    function checkLike() {
        btnLike.classList.add(selectors.buttonLikeCheckedName);
    }
    btnLike.addEventListener('click', checkLike);


    //добавление новой карточки в начало массива
    // cardsContainer.prepend(cardElement);
    return cardElement;
}

function renderCard(object, container) {
    //создание ноды
    const card = createCard(object);
    //добавление ноды на страницу
    cardsContainer.prepend(card);
}

function createInitialCard() {
    // initialCards.map(function (item) {
    //      createCard(item);
    // })

    //initialCards.map(createCard);
    initialCards.map(renderCard);
}
createInitialCard();

//открыть попап
function openPopup(popup) {
    popup.classList.add(selectors.popupOpenedName);
    document.addEventListener('keyup', ClosePopUpByEscape);
    //console.log(form);
    //document.addEventListener('keyup', ClosePopUpByEscape);
    // closePopUpByOverlayClick();

    // const inputList = Array.from(popup.querySelectorAll(form.formInput));
    // const button = popup.querySelector(form.buttonSubmitForm);
    // toggleButtonState(inputList, button);
}

function closePopup(popup) {
    popup.classList.remove(selectors.popupOpenedName);
    document.removeEventListener('keydown', ClosePopUpByEscape);
    //document.removeEventListener('click', closePopUpByOverlayClick);
}

//кнопка открытия формы редактирования профиля
function editProfileHandler() {
    nameInput.value = nameOrigin.textContent;
    jobInput.value = descriptionOrigin.textContent;
    openPopup(popupWindowEditProfile);

    const inputList = Array.from(popupWindowEditProfile.querySelectorAll(form.formInput));
    //const button = popupWindowEditProfile.querySelector(form.buttonSubmitForm);
    //const button = document.querySelector(form.buttonSubmitForm);
    //console.log(button);
    //toggleButtonState(inputList, button);
    disableButton(btnEditProfileSubmit);
}
btnEditProfileElement.addEventListener('click', editProfileHandler);

//кнопка сохранения данных формы редактирования профиля
function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    nameOrigin.textContent = nameInput.value;
    descriptionOrigin.textContent = jobInput.value;
    closeEditHandler();
}
formProfileEditElement.addEventListener('submit', editProfileFormSubmitHandler);

//конпка открытия формы долбавления фото в ленту
function addPhotoHandler() {
    popupPhotoName.value = '';
    popupPhotoLink.value = '';
    openPopup(popupWindowAddPhoto);

    //const inputList = Array.from(popupWindowAddPhoto.querySelectorAll(form.formInput));
    // const button = popupWindowAddPhoto.querySelector(form.buttonSubmitForm);
    // toggleButtonState(inputList, button);
    //console.log(btnAddPlaceSubmit);
    disableButton(btnAddPlaceSubmit);
}
btnAddPlaceElement.addEventListener('click', addPhotoHandler);

//кнопка сохранения формы добавления фото в ленту
function addFormPhotoSubmitHandler(evt) {
    evt.preventDefault();
    const newPhotoName = popupPhotoName;
    const newPhotoLink = popupPhotoLink;
    const newCard = {
        name: newPhotoName.value,
        link: newPhotoLink.value
    };
    renderCard(newCard);
    closeAddHandler();
}
formPhotoAddElement.addEventListener('submit', addFormPhotoSubmitHandler);


//кнопка закрытия формы редактирования профиля
function closeEditHandler() {
    closePopup(popupWindowEditProfile);
    //document.removeEventListener('keydown', ClosePopUpByEscape);
    // closeOpenedPopup();
}
btnCloseEditElement.addEventListener('click', closeEditHandler);

//кнопка закрытия формы добавления фото
function closeAddHandler() {
    closePopup(popupWindowAddPhoto);
    //document.removeEventListener('keydown', ClosePopUpByEscape);
    //closeOpenedPopup();
}
btnCloseAddElement.addEventListener('click', closeAddHandler);

//кнопка закрытия попапа с фото
function closePhotoHandler() {
    closePopup(popupWindowPhoto);
    //document.removeEventListener('keydown', ClosePopUpByEscape);
    //closeOpenedPopup();
}
btnClosePhotoElement.addEventListener('click', closePhotoHandler);

//закрытие попапа по нажатию клавиши Esc
function ClosePopUpByEscape(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        closeOpenedPopup();
    }
}
// document.addEventListener('keyup', ClosePopUpByEscape);



// //закрытие попапа по клику на оверлей
// function closePopUpByOverlayClick() {
//     // const pop = document.querySelector('.popup__container');
//     overlayList.forEach((element) => {
//         //console.log(element);
//         // element.addEventListener('click', CloseOpenedPopup);

//         element.addEventListener('click', function (e) {
//             if (e.target === element)
//                 closeOpenedPopup();
//         });
//     });
// }
function closePopUpByOverlayClick(evt) {
    const pop = document.querySelector('.popup__container');
    //evt.preventDefault();
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
        //document.removeEventListener('keydown', ClosePopUpByEscape);
    }


}

