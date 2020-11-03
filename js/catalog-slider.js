var sliderButtonsDots = document.getElementsByClassName("slider-navigation-button-dot"); //коллекция радиокнопок
var sliderNavButtonLeft = document.querySelector(".slider-navigation-button.left-nav-but");
var sliderNavButtonRight = document.querySelector(".slider-navigation-button.right-nav-but");
var sliderCatalogSlides = document.getElementsByClassName("slider-list-item"); //коллекция слайдов
var currentSlide = 0; //инициализация индекса при открытии страницы
sliderNavButtonLeft.disabled = true;

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
