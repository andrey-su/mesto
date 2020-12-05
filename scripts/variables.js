// переменные для открытия popup
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__button-close');
const buttonOpenPopup = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');

//переменные для каждого попапа
const popupTypeUser = document.querySelector('.popup_type_user');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupTypeImage = document.querySelector('.popup_type_image');


//переменные для кнопок закрытия 
const userPopupCloseButton = popupTypeUser.querySelector(".popup__button-close");
const addCardCloseButton = popupTypeAddCard.querySelector('.popup__button-close');
const typeImageCloseButton = popupTypeImage.querySelector('.popup__button-close');

//переменные для написания текста в формах
const formElement = popup.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputName = popup.querySelector('.popup__input_type_name');
const inputActivity = popup.querySelector('.popup__input_type_activity');

//перменная для вставки данных в template
const elements = document.querySelector('.elements');

//переменная с формой для введения данных
const popupFormPlace = document.querySelector ('.popup__form-place');

//остальные переменные
const inputTypePlaceName = document.querySelector('.popup__input_type_place-name');
const inputTypeLink = document.querySelector('.popup__input_type_link');
const popupButtonAddCard = document.querySelector('.popup__button-add-card');
const openPupupBigImg = document.querySelector('.popup__image');
const popupNamePlace = document.querySelector('.popup__name-place');
const tamplate = document.querySelector('#element__card');

const popupContainer = popupTypeUser.querySelector('.popup__container');

//массив с карточками для вставки в секцию elemets
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  //объект с настройками для валидации
  const validationConfig = {
    formSelector: '.popup__form',
    submitButtonSelector: '.popup__button',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_no-active',
    inputErrorClass: '.popup__input_state_invalid'
}

