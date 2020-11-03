//Added goods Popup
var addedgoodsLink = document.querySelectorAll(".popular-goods-buy-button");
var addedgoodsPopup = document.querySelector(".modal-added-goods");
var addedgoodsClose = addedgoodsPopup.querySelector(".modal-close-button");
var addedgoodsContinue = addedgoodsPopup.querySelector(".modal-added-goods-close-button");

for (var i = 0; i < addedgoodsLink.length; i++) {
  addedgoodsLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addedgoodsPopup.classList.add("modal-show");
  });


  addedgoodsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedgoodsPopup.classList.remove("modal-show");
  });

  addedgoodsContinue.addEventListener("click", function (evt) {
    if (addedgoodsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      addedgoodsPopup.classList.remove("modal-show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addedgoodsPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        addedgoodsPopup.classList.remove("modal-show");
      }
    }
  });
};


//map
const mapLink = document.querySelector(".contacts-map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close-button");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//feedback

const feedbackLink = document.querySelector(".contact-us-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close-button");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".name-feedback-input");
const feedbackEmail = feedbackPopup.querySelector(".email-feedback-input");
const feedbackText = feedbackPopup.querySelector(".textfield-feedback-input");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
    if (storageEmail) {
      feedbackEmail.value = storageEmail;
      feedbackText.focus();
    }
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  feedbackName.classList.remove("feedback-input-invalid");
  feedbackEmail.classList.remove("feedback-input-invalid");
});


feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");
      if (!feedbackName.value) {
        feedbackName.classList.add("feedback-input-invalid");
      }
      if (!feedbackEmail.value && feedbackEmail.checkValidity() == true) {
        feedbackEmail.classList.add("feedback-input-invalid");
      }
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value);
        localStorage.setItem("email", feedbackEmail.value);
      }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      feedbackName.classList.remove("feedback-input-invalid");
      feedbackEmail.classList.remove("feedback-input-invalid");
    }
  }
});

//features-slider

var sliderMenuButtons = document.getElementsByClassName("services-button"); //создаем коллекцию кнопок слайдера
var sliderSlides = document.getElementsByClassName("services-slider-item"); //создаем коллекцию слайдов
var arrayOfButtons = [...sliderMenuButtons]; //конвертируем коллекцию кнопок в массив

for (var i = 0; i < sliderMenuButtons.length; i++) { //вешаем на все кнопки событие
  sliderMenuButtons[i].addEventListener("click", function (evt) { //по клику
    evt.preventDefault(); //отменяем стандартное действие
    for (var indx = 0; indx < sliderMenuButtons.length; indx++) { //в цикле проходим по всем кнопкам слайдера
      sliderMenuButtons[indx].closest(".services-item").classList.remove("services-item-active"); //сбрасываем у всех родительских элементов кнопок состояние активной
      sliderMenuButtons[indx].classList.remove("services-button-active"); //и у самих кнопок
      sliderMenuButtons[indx].disabled = false; //все кнопки больше не "выбранные"
    };
    this.closest(".services-item").classList.add("services-item-active"); //у родителя кликнутой кнопки проставляем класс активности
    this.classList.add("services-button-active"); // и у самой кнопки
    this.disabled = true; // деактивируем кнопку

    var indexForSlides = arrayOfButtons.indexOf(this); //заведем переменную для поиска индекса кнопки в списке
    if (indexForSlides < sliderSlides.length) { //на случай, если кнопок больше, чем слайдов
      for (var j = 0; j < sliderSlides.length; j++) { //прячем все слайды
        sliderSlides[j].classList.add("visually-hidden-elements");
      };
      sliderSlides[indexForSlides].classList.remove("visually-hidden-elements"); //показываем нужный слайд
    }
  });
};

/* Эта реализация, конечно, крайне "жадная" и её можно улучшить, но для слайдера
 из маленького количества элементов — это не большая беда */

 //Catalog Slider

 var sliderButtonsDots = document.getElementsByClassName("slider-navigation-button-dot"); //коллекция радиокнопок
 var sliderNavButtonLeft = document.querySelector(".slider-navigation-button.left-nav-but");
 var sliderNavButtonRight = document.querySelector(".slider-navigation-button.right-nav-but");
 var sliderCatalogSlides = document.getElementsByClassName("slider-list-item"); //коллекция слайдов
 var currentSlide = 1; //инициализация индекса при открытии страницы
 sliderNavButtonRight.disabled = true;

 sliderNavButtonLeft.addEventListener("click", function (evt) { //зададим логику левой кнопке при клике
   evt.preventDefault(); //отменяем стандартное действие
   if (currentSlide - 1 >= 0) {
     sliderCatalogSlides[currentSlide].classList.add("hidden-slide");
     sliderButtonsDots[currentSlide].classList.remove("selected-slide");
     this.disabled = true;
     currentSlide--;
     sliderCatalogSlides[currentSlide].classList.remove("hidden-slide");
     sliderButtonsDots[currentSlide].classList.add("selected-slide");
     sliderNavButtonRight.disabled = false;
   };
 });

 sliderNavButtonRight.addEventListener("click", function (evt) { //зададим логику правой кнопке при клике
   evt.preventDefault(); //отменяем стандартное действие
   if (currentSlide + 1 < sliderCatalogSlides.length) {
     sliderCatalogSlides[currentSlide].classList.add("hidden-slide");
     sliderButtonsDots[currentSlide].classList.remove("selected-slide");
     this.disabled = true;
     currentSlide++;
     sliderCatalogSlides[currentSlide].classList.remove("hidden-slide");
     sliderButtonsDots[currentSlide].classList.add("selected-slide");
     sliderNavButtonLeft.disabled = false;
   };
 });
