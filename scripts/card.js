import { initialCards } from './data.js';
import { cardsContainer, openPopup, popupWindowPhoto, photo, title } from './index.js';


export class Card {
  constructor(object, templateSelector) {
    this._name = object.name;
    this._alt = object.name;
    this._src = object.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo-place').src = this._src;
    this._element.querySelector('.element__photo-place').alt = this._alt;
    this._addEventListeners();
    cardsContainer.prepend(this._element);
    return this._element;
  }

  _addEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.element__delete').addEventListener('click', this._handleRemoveCard);
    this._element.querySelector('.element__photo-place').addEventListener('click', this._handleOpenPopup);
  }

  //лайк
  _handleLikeCard(evt) {
    evt.target.classList.add('element__like_checked');
  }

  //delete card function
  _handleRemoveCard(evt) {
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
  }

  //открыть карточку в полном размере
  _handleOpenPopup(evt) {
    photo.alt = this.alt;
    photo.src = this.src;
    title.textContent = this.alt;
    openPopup(popupWindowPhoto);
  }

}

initialCards.forEach((item) => {
  const card = new Card(item, '.cards-item-template');
  card.generateCard();
})


