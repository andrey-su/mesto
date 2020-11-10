// переменные для открытия popup
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__button-close');
const buttonOpenPopup = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');

//переменные для каждого попапа
const popupTypeUser = document.querySelector('.popup_type_user');
const popupTypeAddCard = document.querySelector('.popup_type_add-card')
const popupTypeImage = document.querySelector('.popup_type_image');


//переменные для кнопок закрытия 
const userPopupCloseButton = popupTypeUser.querySelector(".popup__button-close");
const addCardCloseButton = popupTypeAddCard.querySelector('.popup__button-close');
const typeImageCloseButton = popupTypeImage.querySelector('.popup__button-close')

//переменные для написания текста в формах
let formElement = popup.querySelector('.popup__form');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputName = popup.querySelector('.popup__input_type_name');
let inputActivity = popup.querySelector('.popup__input_type_activity');

//перменная для вставки данных в template
const elements = document.querySelector('.elements')

//переменная с формой для введения данных
const popupFormPlace = document.querySelector ('.popup__form-place');

//остальные переменные
const inputTypePlaceName = document.querySelector('.popup__input_type_place-name');
const inputTypeLink = document.querySelector('.popup__input_type_link');
const popupButtonAddCard = document.querySelector('.popup__button-add-card');
const openPupupBigImg = document.querySelector('.popup__image');
const popupNamePlace = document.querySelector('.popup__name-place');

//функция дублирования информации  из секции  profile  в popup по редактирванию профиля
function openProfilePopup() {
inputName.value = profileTitle.textContent;
inputActivity.value = profileSubtitle.textContent;
/*showPopup(popup);*/
}

// вызов функции openProfilePopup для вставки текста в popup для редактирвания профиля
openProfilePopup(showPopup)

// функция открытия попапа
function showPopup(popup) {
  popup.classList.add('popup_opened');
  /*popup.removeEventListener('click', showPopup);*/
}


  // функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  /*event.target.closest('.popup').classList.remove('popup_opened');*/ //пробный вариант
}


//функция  для замены  текста введённый в popup для редактирования профиля
function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputActivity.value;
  closePopup(popup);
}

//функция открытия popup с увеличенной картинкой
function openImagePopup(src, alt, caption) {
  openPupupBigImg.src = src;
  openPupupBigImg.alt = alt;
  popupNamePlace.textContent = caption;
  showPopup(popupTypeImage);
}

//отлежиивание события клика для открытия popup
buttonOpenPopup.addEventListener('click', () => showPopup(popupTypeUser));
profileAddButton.addEventListener('click', () => showPopup(popupTypeAddCard));
/*elementsCardImage.addEventListener('click', () => showPopup(popupTypeImage));*/


// отлежиивание события клика для закрытия popup
/*popupCloseButton.addEventListener('click', closePopup);*/
userPopupCloseButton.addEventListener('click', () =>  closePopup(popupTypeUser));
addCardCloseButton.addEventListener('click', () => closePopup(popupTypeAddCard));
typeImageCloseButton.addEventListener('click', () => closePopup(popupTypeImage));


//обработчик событий
formElement.addEventListener('submit', formSubmitHandler);

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


// функция создания карточки с фотографией и текстом в template
function createCard(data) {
  const elementCard = document.querySelector('#element__card').content;
  const copyCard = elementCard.cloneNode(true);
  copyCard.querySelector('.elements__card-image').src = data.link; 
  copyCard.querySelector('.elements__card-title').textContent = data.name;
  

// код для кнопки удаления карточек
  copyCard.querySelector('.elements__card-button-delite').addEventListener('click', event => {
  const popupTarget = event.target.closest('.elements__card')

  if(popupTarget) {
    popupTarget .remove()
  }
  });

  //код кнопки лайк
  copyCard.querySelector('.elements__card-button').addEventListener('click', function(event) {
  event.target.classList.toggle('elements__card-button_active');
});

//обработчик для открытия popup с картинкой
const elementsCardImage = copyCard.querySelector('.elements__card-image');
elementsCardImage.addEventListener('click', () => openImagePopup(data.link, data.name, data.name));

 return copyCard;
}


  initialCards.forEach(function(cardData){
  const cardElement = createCard(cardData);
  elements.prepend(cardElement);
  });

 
 

   // функция по добавлению новой карточки через popup
  function addCard(data) {
    const elementCard = document.querySelector('#element__card').content;
    const copyCard = elementCard.cloneNode(true);
    copyCard.querySelector('.popup__input_type_link').src = data.link; 
    copyCard.querySelector('.popup__input_type_place-name').textContent = data.name;
    return copyCard;
  }

    popupTypeAddCard.addEventListener('submit', event => {
    event.preventDefault();
    const elementsPopup = {
    name: inputTypePlaceName.value,
    link: inputTypeLink.value
    }
  
  const cardElement = createCard(elementsPopup);
  elements.prepend(cardElement);
  popupFormPlace.reset(elementsPopup);
  closePopup(popupTypeAddCard);  
});





   
  


  


 


/*function addCardUser(event) {
   event.preventDefault;
   elementsCardImage.src = inputTypePlaceName.value
   elementsCardTitle.textContent = inputTypeLink.value
  } */

  
