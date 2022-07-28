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
}

createInitialCard();





//присваиваем переменной текущее (старое) значение поля профиля 
let nameOrigin = document.querySelector('.profile-info__name');
let descriptionOrigin = document.querySelector('.profile-info__description');
//присваиваем переменной текущее значение поле формы
let nameInput = document.querySelector('.popup__profile-field_type_name');
let jobInput = document.querySelector('.popup__profile-field_type_job');


//кнопка сохранения данных формы
let formElement = document.getElementById('submitform');
function formSubmitHandler(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    nameOrigin.textContent = nameInput.value;
    descriptionOrigin.textContent = jobInput.value
    closeHandler();
}
formElement.addEventListener('submit', formSubmitHandler);

//кнопка редактирования профиля
let editElement = document.querySelector('.profile-info__edit-button');
function editHandler() {
    nameInput.value = nameOrigin.textContent;
    jobInput.value = descriptionOrigin.textContent
    document.getElementById('overlay').classList.add('popup-overlay_opened');
}
editElement.addEventListener('click', editHandler);

//кнопка закрытия формы
let closeElement = document.querySelector('.popup__close-icon');
function closeHandler() {
    document.getElementById('overlay').classList.remove('popup-overlay_opened');
}
closeElement.addEventListener('click', closeHandler);






