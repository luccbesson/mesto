//присваиваем полю формы текущее (старое) значение поля профиля 
let nameInput = document.querySelector('.profile-info__name');
let jobInput = document.querySelector('.profile-info__description');

//кнопка сохранения данных формы
let formElement = document.getElementById('submitform');
function formSubmitHandler(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    nameInput.textContent = document.querySelector('.popup__profile-field_type_name').value; //изменить на id
    jobInput.textContent = document.querySelector('.popup__profile-field_type_job').value; //изменить на id

    closeHandler();
}
formElement.addEventListener('submit', formSubmitHandler); 

//кнопка редактирования профиля
let editElement = document.querySelector('.profile-info__edit-button');
function editHandler() {
    document.getElementById('popup__profile-name').value = nameInput.textContent;
    document.getElementById('popup__profile-description').value = jobInput.textContent;
    document.getElementById('overlay').classList.add('popup-overlay_opened');
}
editElement.addEventListener('click', editHandler);

//кнопка закрытия формы
let closeElement = document.querySelector('.popup__close-icon');
function closeHandler() {
    document.getElementById('overlay').classList.remove('popup-overlay_opened');
}
closeElement.addEventListener('click', closeHandler);






