var loginLink = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var mapLink = document.querySelector(".map-link");
var popupLogin = document.querySelector(".modal-login");
var popupMap = document.querySelector(".modal-map");
var closeLogin = document.querySelector(".modal-close-login");
var closeMap = document.querySelector(".modal-close-map");
var login = popupLogin.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var password = popup.querySelector("[name=password");

loginLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLogin.classList.add("modal-show");
	login.focus();
	if (storage) {
		login.value = storage;
		password.focus();
	}
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});


closeLogin.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLogin.classList.remove("modal-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});

