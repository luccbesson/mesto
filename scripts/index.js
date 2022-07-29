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
    cards: '.elements'
}

//создание DOM объектов
const cards = document.querySelector(selectors.cards);

function createCard(object) {
    //создаем шаблон для карточки
    const template = `<div class="element">
    <img class="element__photo-place" src=${object.link} alt="фото карточки"><div class="element__description">
    <h2 class="element__title">${object.name}</h2>
    <button class="element__like" type="button"></button>
    </div>`
    cards.insertAdjacentHTML('beforeend', template);
}

function createInitialCard() {
    initialCards.map(function (item) {
        createCard(item);
    })
    //initialCards.map(createCard);
}
createInitialCard();





//присваиваем переменной текущее (старое) значение поля профиля 
let nameOrigin = document.querySelector('.profile-info__name');
let descriptionOrigin = document.querySelector('.profile-info__description');
//присваиваем переменной текущее значение поле формы
let nameInput = document.querySelector('.popup__profile-field_type_name');
let jobInput = document.querySelector('.popup__profile-field_type_job');

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
}
addElement.addEventListener('click', addHandler);

//здесь будет кнопка сохранения формы добавления фото в ленту
const formAddElement = document.getElementById('submit_add-form');
function formAddSubmitHandler(evt) {
    evt.preventDefault();
    //здесь будет функционал добавления фото в ленту
    //const photoName.textContent = document.getElementById('popup__photo-name').value;
    //const photoLink.textContent = document.getElementById('popup__photo-link').value;
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







