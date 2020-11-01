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
