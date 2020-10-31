var addedgoodsLink = document.querySelectorAll(".popular-goods-buy-button");
var addedgoodsPopup = document.querySelector(".modal-added-goods");
var addedgoodsClose = addedgoodsPopup.querySelector(".modal-close-button");
var addedgoodsContinue = addedgoodsPopup.querySelector(".modal-added-goods-close-button");

for (var i = 0; i < addedgoodsLink.length; i++)
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
