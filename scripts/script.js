const editButton = document.querySelector("#edit-button");
const editPopup = document.querySelector("#profile");

function showPopup() {
  editPopup.classList.add("popup_opened");
}

editButton.addEventListener("click", showPopup);

const addButton = document.querySelector("#add-button");
const addPopup = document.querySelector("#add-popup");

function showAddPopup() {
  addPopup.classList.add("popup_opened");
}

addButton.addEventListener("click", showAddPopup);


const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button_type_close");

function closePopup() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopup);

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


const template = document.querySelector(".elements__template");
const cardArea = document.querySelector(".elements__cards");


function createCard(name, link) {
  const card = template.cloneNode(true).content.querySelector(".elements__card");
  const cardImage = card.querySelector(".elements__image");
  const cardText = card.querySelector(".elements__text");
  const cardTrashButton = card.querySelector(".elements__button_type_trash");
  const cardLikeButton = card.querySelector(".elements__button_type_like");
  const cardWindow = card.querySelector(".elements__window");
  const buttonCardImage = card.querySelector(".elements__image-button");
  const cardWindowImage = card.querySelector(".elements__window-image");
  const cardWindowName = card.querySelector(".elements__window-name");
  const windowCloseButton = card.querySelector("#window-close-button");

  
  cardImage.src = link;
  cardText.textContent = name;
  cardImage.alt = name;
  cardWindowImage.src = link;
  cardWindowImage.alt = name;
  cardWindowName.textContent = name;

  
  cardTrashButton.addEventListener("click", function () {
    card.remove();
  });

  
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.add("elements__button_type_like-active");
  });

  
  buttonCardImage.addEventListener("click", function () {
    cardWindow.classList.toggle("elements__window_opened");
  });

  
  windowCloseButton.addEventListener("click", function () {
    cardWindow.classList.remove("elements__window_opened");
  });

  
  return card;
}


initialCards.forEach(function (element) {
  const firstcards = createCard(element.name, element.link);
  cardArea.append(firstcards);
});

function changeProfile(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__item_type_name");
  const aboutInput = document.querySelector(".popup__item_type_about");
  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

const submitButton = document.querySelector(".popup__button_type_send");
const formElement = document.querySelector(".popup__container");

formElement.addEventListener("submit", changeProfile);

submitButton.addEventListener("click", closePopup);

const cardForm = document.querySelector("#add-form");
const addCardButton = document.querySelector("#add-card-button");

addCardButton.addEventListener("click", function () {
  cardForm.classList.add("popup_opened");
});

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const placeInput = document.querySelector("#place-input");
  const imageInput = document.querySelector("#link-input");

  const newCard = createCard(placeInput.value, imageInput.value);
  cardArea.prepend(newCard);
});


function closeAddPopup() {
  addPopup.classList.remove("popup_opened");
}

addCardButton.addEventListener("click", closeAddPopup);


const closeaddButton = document.querySelector("#close-add-popup");


closeaddButton.addEventListener("click", closeAddPopup);
