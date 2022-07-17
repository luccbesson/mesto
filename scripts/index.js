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






