// переменные для открытия popup
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__button-close');
let buttonOpenPopup = document.querySelector('.profile__button');

//переменные для написания текста в формах
let formElement = popup.querySelector('.popup__form');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputName = popup.querySelector('.popup__input_type_name');
let inputActivity = popup.querySelector('.popup__input_type_activity');


// функция открытия попапа
function showPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputActivity.value = profileSubtitle.textContent;
/*popup.removeEventListener('click', showPopup);*/
}

//отлежиивание события клика для открытия popup
buttonOpenPopup.addEventListener('click', showPopup);
  
// функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

// отлежиивание события клика для закрытия popup
popupCloseButton.addEventListener('click', closePopup);


//функция  для заммены  текста 
function formSubmitHandler(event) {
  event.preventDefault();
  closePopup();

  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputActivity.value;
}



//обработчик событий
formElement.addEventListener('submit', formSubmitHandler);
  
