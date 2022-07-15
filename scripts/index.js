let nameOrigin = document.querySelector('.profile-info__name');
let descriptionOrigin = document.querySelector('.profile-info__description');
let nameInput;
let jobInput;

let editElement = document.querySelector('.profile-info__edit-button');
function editHandler() {
    document.getElementById('popup__profile-name').value = nameOrigin.textContent; //присваиваем форме оригинальные значения имени
    document.getElementById('popup__profile-description').value = descriptionOrigin.textContent; //присваиваем форме оригинальные значения описания
    //document.getElementById('overlay').style.display = "block";
    document.getElementById('overlay').classList.add('popup-overlay_opened');
}
editElement.addEventListener('click', editHandler);

//let formElement = document.querySelector('.popup__submit-button');
let formElement = document.getElementById('submitform');
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput = document.querySelector('.popup__profile-field_name').value;
    jobInput = document.querySelector('.popup__profile-field_job').value;
    // console.log(formElement);
    // console.log(nameInput);
    // console.log(jobInput);
    nameOrigin.textContent = nameInput;
    descriptionOrigin.textContent = jobInput;
    // console.log(nameOrigin);
    // console.log(descriptionOrigin);
    //document.getElementById('overlay').style.display = "none";
    document.getElementById('overlay').classList.remove('popup-overlay_opened');
}
formElement.addEventListener('submit', formSubmitHandler);

let closeElement = document.querySelector('.popup__close-icon');
function closeHandler() {
    document.getElementById('overlay').classList.remove('popup-overlay_opened');
}
closeElement.addEventListener('click', closeHandler);