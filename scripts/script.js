let name_origin = document.querySelector('.profile-info__name');
document.getElementById('popup__profile-name').value = name_origin.innerHTML; //присваиваем форме оригинальные значения имени

let description_origin = document.querySelector('.profile-info__description');
document.getElementById('popup__profile-description').value = description_origin.innerHTML; //присваиваем форме оригинальные значения описания

let editElement = document.querySelector('.profile-info__edit-button');
function editHandler (evt) {
    evt.preventDefault();
    document.getElementById('popup').style.display = "inline";
}
editElement.addEventListener('click', editHandler);


let formElement = document.querySelector('.popup__submit-button'); 
function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__profile-name').value;
    let jobInput = document.querySelector('.popup__profile-description').value; 

    // console.log(formElement);
    // console.log(nameInput);
    // console.log(jobInput);

    name_origin.textContent = nameInput;
    description_origin.textContent = jobInput;

    // console.log(name_origin);
    // console.log(description_origin);

    document.getElementById('popup').style.display = "none";
}
formElement.addEventListener('click', formSubmitHandler);


let closeElement = document.querySelector('.popup__close-icon');
function closeHandler (evt) {
    evt.preventDefault();
    document.getElementById('popup').style.display = "none";
}
closeElement.addEventListener('click', closeHandler);





