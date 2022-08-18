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

    formEditProfileID: 'submit_edit-form',
    formAddPlaceSubmitID: 'submit_add-form',

    buttonEditProfileID: 'button_edit-profile',
    buttonAddPlaceID: 'button_add-place',
    butttonEditProfileSubmitID: 'submit_edit-profile-form',
    buttonAddPlaceSubmitID: 'submit_add-place-form',    
    buttonCloseEditFormID: 'button_close-edit-form',
    buttonCloseAddFormID: 'button_close-add-form',
    buttonClosePhotoID: 'button_close-photo',
    buttonLike: '.element__like',
    buttonLikeChecked: '.element__like_checked',
    buttonLikeCheckedName: 'element__like_checked',
    buttonDelete: '.element__delete',

    overlay: '.popup',
    // overlayEditProfile: '.popup_type_edit-profile',
    // overlayAddPhoto: '.popup_type_add-photo',
    // overlayPhoto: '.popup_type_photo',

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

const form =
{
    formElement: '.popup__form',
    formInput: '.popup__profile-field',
    buttonSubmitForm: '.popup__submit-button',
    buttonSubmitFormDisabledName: 'popup__submit-button_disabled'
}

