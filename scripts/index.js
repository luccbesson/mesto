//массив карточек из задания для отображения на странице
const initialCards = [
    {
        name: 'Карелия',
        link: './images/Карелия.jpg'
    },
    {
        name: 'Гора Эльбрус',
        link: './images/Эльбрус.jpg'
    },
    {
        name: 'Домбай',
        link: './images/Домбай.jpg'
    },
    {
        name: 'Озеро Байкал',
        link: './images/Байкал.jpg'
    },
    {
        name: 'Алтай',
        link: './images/Алтай.jpg'
    },
    {
        name: 'Карачаево-Черкесия',
        link: './images/Карачаевск.jpg'
    }
]


//отдельные селекторы, чтобы напрямую не использовать имя класса или id в скрипте
const selectors =
{
    profileNameOrigin: '.profile-info__name',
    profileJobOrigin: '.profile-info__description',
    profileNameInput: '.popup__profile-field_type_name',
    profileJobInput: '.popup__profile-field_type_job',

    cards: '.elements',
    card: '.element',
    cardTemplate: '#cards-item-template',
    cardTitle: '.element__title',
    cardPhoto: '.element__photo-place',

    buttonEditID: 'button_edit-profile',
    buttonEditSubmitID: 'submit_edit-form',
    buttonAddPlaceID: 'button_add-place',
    buttonAddPlaceSubmitID: 'submit_add-form',
    buttonCloseEditFormID: 'button_close-edit-form',
    buttonCloseAddFormID: 'button_close-add-form',
    buttonClosePhotoID: 'button_close-photo',
    buttonLike: '.element__like',
    buttonLikeChecked: '.element__like_checked',
    buttonLikeCheckedName: 'element__like_checked',
    buttonDelete: '.element__delete',

    popupWindow: '.popup__container',
    popupOpenedName: 'popup_opened',

    profileEditPopup: '.popup_type_edit-profile',
    photoAddPopup: '.popup_type_add-photo',
    photoPopup: '.popup_type_photo',

    popupPhoto: '.popup__photo',
    popupPhotoTitle: '.popup__photo-title',
    popupPhotoName: '.popup__profile-field_type_photo-name',
    popupPhotoLink: '.popup__profile-field_type_photo-link'
}

//попапы
const popupWindowPhoto = document.querySelector(selectors.photoPopup);
const popupWindowEditProfile = document.querySelector(selectors.profileEditPopup);
const popupWindowAddPhoto = document.querySelector(selectors.photoAddPopup);
const popupPhotoName = document.querySelector(selectors.popupPhotoName);
const popupPhotoLink = document.querySelector(selectors.popupPhotoLink);

//кнопки
const profileEditElement = document.getElementById(selectors.buttonEditID);
const formProfileEditElement = document.getElementById(selectors.buttonEditSubmitID);
const photoAddElement = document.getElementById(selectors.buttonAddPlaceID);
const formPhotoAddElement = document.getElementById(selectors.buttonAddPlaceSubmitID);
const btnCloseEditElement = document.getElementById(selectors.buttonCloseEditFormID);
const btnCloseAddElement = document.getElementById(selectors.buttonCloseAddFormID);
const btnClosePhotoElement = document.getElementById(selectors.buttonClosePhotoID);

//создание DOM объектов
const cardsContainer = document.querySelector(selectors.cards);
const cardTemplate = document.querySelector(selectors.cardTemplate).content.querySelector(selectors.card);

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
        openPopup(popupWindowPhoto);
        const photo = document.querySelector(selectors.popupPhoto);
        photo.src = object.link;
        photo.alt = object.name;
        const title = document.querySelector(selectors.popupPhotoTitle);
        title.textContent = object.name;

    })

    //удаление фото
    const btnDel = cardElement.querySelector(selectors.buttonDelete);
    btnDel.addEventListener('click', function () {
        cardElement.remove();
    }
    );

    //лайк фото
    const btnLike = cardElement.querySelector(selectors.buttonLike);
    btnLike.addEventListener('click', function () {
        btnLike.classList.add(selectors.buttonLikeCheckedName);
    });

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
}

function closePopup(popup) {
    popup.classList.remove(selectors.popupOpenedName);
}

//кнопка открытия формы редактирования профиля
function editProfileHandler() {
    nameInput.value = nameOrigin.textContent;
    jobInput.value = descriptionOrigin.textContent
    openPopup(popupWindowEditProfile);
}
profileEditElement.addEventListener('click', editProfileHandler);

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
    openPopup(popupWindowAddPhoto);
    popupPhotoName.value = '';
    popupPhotoLink.value = '';
}
photoAddElement.addEventListener('click', addPhotoHandler);

//кнопка сохранения формы добавления фото в ленту
function addFormPhotoSubmitHandler(evt) {
    evt.preventDefault();
    const newPhotoName = popupPhotoName;
    const newPhotoLink = popupPhotoLink;
    const newCard = [
        {
            name: newPhotoName.value,
            link: newPhotoLink.value
        }
    ]
    // newCard.map(createCard);
    newCard.map(renderCard);
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