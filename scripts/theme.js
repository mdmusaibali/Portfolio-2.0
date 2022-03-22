"use strict";
//Navigation
const navMobileItems = document.querySelector(".navigation__items--mobile");
const navButton = document.querySelector(".navigation__button--options");
navButton.addEventListener("click", function (e) {
  navMobileItems.classList.toggle("visible");
});

//<========================Themes==============================>
const themeLight = {
  "--color-background": "white",
  "--color-primary": "#00d1b2",
  "--color-primary-light": "#00d1b238",
  "--color-primary-dark": "#049b84",
  "--color-secondary": "#7bccca",
  "--color-tertiary": "#ff94c4",
  "--color-text-primary": "black",
  "--color-text-secondary": "#363636",
  "--color-nav-hover": "#ccccccd5",
  "--color-gradient": "#303437",
  "--color-dark-gray": "#c5c4c2",
  "--transparent": "#ffffffbf",
};
const themeDark = {
  "--color-background": "black",
  "--color-primary": "#eb5757",
  "--color-primary-light": "#f28e8e31",
  "--color-primary-dark": "#eb3c3c",
  "--color-secondary": "#f9bf52",
  "--color-tertiary": "#1ab7ea",
  "--color-text-primary": "#ffffffe5",
  "--color-text-secondary": "#9a989a",
  "--color-nav-hover": "#1a1f28",
  "--color-gradient": "#303437",
  "--color-dark-gray": "#2c323f",
  "--transparent": "#111111bf",
};
const themePurple = {
  "--color-background": "#1e3253",
  "--color-primary": "#d884ff",
  "--color-primary-light": "#e4aaff3f",
  "--color-primary-dark": "#c243fd",
  "--color-secondary": "#eb505a",
  "--color-tertiary": "#aac86e",
  "--color-text-primary": "#ffffff",
  "--color-text-secondary": "#a0acbc",
  "--color-nav-hover": "#2c4c78",
  "--color-gradient": "#303437",
  "--color-dark-gray": "#2c4c78",
  "--transparent": "#21315bc5",
};
const themeGreen = {
  "--color-background": "#ecf5e3",
  "--color-primary": "#2d9641",
  "--color-primary-light": "#59976446",
  "--color-primary-dark": "#129029",
  "--color-secondary": "#b8723f",
  "--color-tertiary": "#b33938",
  "--color-text-primary": "#303e22",
  "--color-text-secondary": "#809070",
  "--color-nav-hover": "#c7e2ab",
  "--color-gradient": "#303437",
  "--color-dark-gray": "#c7e2ab",
  "--transparent": "#f0f0d57e",
};
const themes = [themeLight, themeDark, themePurple, themeGreen];
const themesItems = document.querySelectorAll(".themes__items-item");
const themesBox = document.querySelector(".themes");
const themesButton = document.querySelectorAll(".navigation__button--theme");
const mainWrapper = document.querySelector(".main__wrapper");
const buttonReset = document.querySelector(".btn--reset");

const applyTheme = function (themeName) {
  for (var i = 0; i < Object.keys(themeLight).length; i++) {
    var key = Object.keys(themeName)[i];
    document.documentElement.style.setProperty(key, `${themeName[key]}`);
  }
  localStorage.setItem("theme", JSON.stringify(themeName));
};

themesButton.forEach((el) => {
  el.addEventListener("click", function () {
    themesBox.classList.toggle("hidden");
  });
});

themesItems.forEach(function (el) {
  el.addEventListener("click", function () {
    var currentTheme = themes[el.dataset.value];
    localStorage.setItem("theme", JSON.stringify(currentTheme));
    for (var i = 0; i < Object.keys(themeLight).length; i++) {
      var key = Object.keys(currentTheme)[i];
      document.documentElement.style.setProperty(key, `${currentTheme[key]}`);
    }
  });
});

//Saving user Preferred theme to browser storage
const userPreferredTheme = JSON.parse(localStorage.getItem("theme"));
for (var i = 0; i < Object.keys(themeLight).length; i++) {
  var key = Object.keys(userPreferredTheme)[i];
  document.documentElement.style.setProperty(key, `${userPreferredTheme[key]}`);
}

buttonReset.addEventListener("click", function () {
  var currentTheme = themes[0];
  applyTheme(currentTheme);
});
