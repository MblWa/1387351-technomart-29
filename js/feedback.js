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
});


feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");
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
    }
  }
});
