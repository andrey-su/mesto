export class Card {
    constructor(data, selector, snowPopup){
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._snowPopup = snowPopup;
    }
     
    //метод клонирования tamplate узла
    _getTemplate() {const cardElement = document.querySelector(this._selector).content.querySelector('.elements__card').cloneNode(true);

    return cardElement;
      }

    //метод для отображения карточки 
    generateCard() {
      this._element = this._getTemplate();
      this._setListeners();
      const popupImage = this._element.querySelector('.elements__card-image');
      popupImage.src = this._link;
      popupImage.alt = this._name;
      this._element.querySelector('.elements__card-title').textContent = this._name;

      return this._element;
    }

    //метод  с обработчиками событий для открыя popupImage, кнопки like, delite 
    _setListeners() {
      this._element.querySelector('.elements__card-image').addEventListener('click', () => {
        this._showPopup(this._name, this._link);
        });
    
      this._element.querySelector('.elements__card-button-delite').addEventListener('click', () => {
        this._handlerDeleteCard();
        });

        this._element.querySelector('.elements__card-button').addEventListener('click', () => {
            this._handlerLikeCard();
        });
      }

      //метод для функционирования кнопки delite
      _handlerDeleteCard() {
        this._element.remove();
        this._element = null;
      }

      //метод для функционирования кнопки like
      _handlerLikeCard() {
        this._element.querySelector('.elements__card-button').classList.toggle('elements__card-button_active');
      }
      
     /* 
     //метод для удаления
     _handlerDeleteCard() {
        this._element.target.closest('.elements__card')
      if(popupTarget) {
        popupTarget.remove();
      }
     _handlerDeleteCard() {
     const popupTarget = this._element.target.closest('.elements__card')
     if(popupTarget) {
     popupTarget.remove()
  }
  }
      
    }*/

}

