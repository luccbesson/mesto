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
//const cardsArray = Array.from(initialCards);


//отдельные селекторы, чтобы напряму не использовать имя класса по всему скрипту
const selectors =
{
    cards: '.elements',
    cardTemplate: '#cards-item-template',
    cardTitle: '.element__title',
    cardPhoto: '.element__photo-place',
    buttonLike: '.element__like',
    buttonLikeChecked: '.element__like_checked',
    buttonLikeCheckedName: 'element__like_checked',
    buttonDelete: '.element__delete',
    popupPhoto: '.popup__photo',
    popupPhotoTitle: '.popup__photo-title'
}

//создание DOM объектов
const cards = document.querySelector(selectors.cards);
const cardTemplate = document.querySelector(selectors.cardTemplate).content.children[0];

function createCard(object) {
    //создаем ноду из шаблона и рендерим карточки
    const cardElement = cardTemplate.cloneNode(true);
    const name = cardElement.querySelector(selectors.cardTitle);
    name.textContent = object.name;
    // const link = cardElement.querySelector(selectors.cardPhoto);
    // link.src = object.link;
    const image = cardElement.querySelector(selectors.cardPhoto);
    image.src = object.link;

    //открытие картинки в полном размере
    image.addEventListener('click', function () {
        document.getElementById('overlay_photo').classList.add('popup-overlay_opened');
        const photo = document.querySelector(selectors.popupPhoto);
        photo.src = object.link;
        const title = document.querySelector(selectors.popupPhotoTitle);
        title.textContent = object.name;
    })

    //удаление фото
    const btnDel = cardElement.querySelector(selectors.buttonDelete);
    btnDel.addEventListener('click', function () {
        cardElement.remove();
    });

    //лайк фото
    const btnLike = cardElement.querySelector(selectors.buttonLike);
    btnLike.addEventListener('click', function () {
        btnLike.classList.add(selectors.buttonLikeCheckedName);
        console.log(btnLike);
    });

    //добавление новой карточки в начало массива
    cards.prepend(cardElement);
}

function createInitialCard() {
    initialCards.map(function (item) {
        createCard(item);
    })
    //initialCards.map(createCard);
}
createInitialCard();


//присваиваем переменной текущее (старое) значение поля профиля 
const nameOrigin = document.querySelector('.profile-info__name');
const descriptionOrigin = document.querySelector('.profile-info__description');
//присваиваем переменной текущее значение поле формы
const nameInput = document.querySelector('.popup__profile-field_type_name');
const jobInput = document.querySelector('.popup__profile-field_type_job');

//кнопка открытия формы редактирования профиля
const editElement = document.getElementById('button_edit-profile');
function editHandler() {
    nameInput.value = nameOrigin.textContent;
    jobInput.value = descriptionOrigin.textContent
    document.getElementById('overlay_edit-form').classList.add('popup-overlay_opened');
}
editElement.addEventListener('click', editHandler);

//кнопка сохранения данных формы редактирования профиля
const formEditElement = document.getElementById('submit_edit-form');
function formEditSubmitHandler(evt) {
    evt.preventDefault();
    nameOrigin.textContent = nameInput.value;
    descriptionOrigin.textContent = jobInput.value;
    closeEditHandler();
}
formEditElement.addEventListener('submit', formEditSubmitHandler);

//конпка открытия формы долбавления фото в ленту
const addElement = document.getElementById('button_add-place');
function addHandler() {
    document.getElementById('overlay_add-form').classList.add('popup-overlay_opened');
    document.querySelector('.popup__profile-field_type_photo-name').value = '';
    document.querySelector('.popup__profile-field_type_photo-link').value = '';
}
addElement.addEventListener('click', addHandler);

//кнопка сохранения формы добавления фото в ленту
const formAddElement = document.getElementById('submit_add-form');
function formAddSubmitHandler(evt) {
    evt.preventDefault();
    const newPhotoName = document.querySelector('.popup__profile-field_type_photo-name');
    const newPhotoLink = document.querySelector('.popup__profile-field_type_photo-link');
    const newCard = [
        {
            name: newPhotoName.value,
            link: newPhotoLink.value
        }
    ]
    newCard.map(createCard);
    closeAddHandler();
}
formAddElement.addEventListener('submit', formAddSubmitHandler);


//кнопка закрытия формы редактирования профиля
let closeEditElement = document.getElementById('button_close-edit-form');
function closeEditHandler() {
    document.getElementById('overlay_edit-form').classList.remove('popup-overlay_opened');
}
closeEditElement.addEventListener('click', closeEditHandler);

//кнопка закрытия формы добавления фото
const closeAddElement = document.getElementById('button_close-add-form');
function closeAddHandler() {
    document.getElementById('overlay_add-form').classList.remove('popup-overlay_opened');
}
closeAddElement.addEventListener('click', closeAddHandler);

//кнопка закрытия попапа с фото
const closePhotoElement = document.getElementById('button_close-photo');
function closePhotoHandler() {
    document.getElementById('overlay_photo').classList.remove('popup-overlay_opened');
}
closePhotoElement.addEventListener('click', closePhotoHandler);







