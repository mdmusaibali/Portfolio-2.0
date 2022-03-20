"use strict";
// document.documentElement.style.setProperty("--color-primary", "#00d1b2");
const navMobileItems = document.querySelector(".navigation__items--mobile");
const navButton = document.querySelector(".navigation__button--options");
const headerFunText = document.querySelectorAll(".header__fun-text");
navButton.addEventListener("click", function (e) {
  navMobileItems.classList.toggle("visible");
});

//Fun Text Generator
function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}
const funTexts = [
  "i love watching anime ❤",
  "i think there's a monster under my bed 😥",
  "i'm gonna be hokage one day 😁",
  "in constant state of learning something new",
  "i think black is an emotion",
  "a hard working person",
  "i can fall asleep anywhere 😴",
  "i would like to be your friend😄",
];
var count = 0;
// var randCount = generateRandom(0, 5);
// headerFunText.textContent = funTexts[randCount];

headerFunText.forEach((el) => {
  el.addEventListener("click", function () {
    // var randCount = generateRandom(0, 5);
    // headerFunText.textContent = funTexts[randCount];
    el.textContent = funTexts[count++];
    if (count >= funTexts.length) count = 0;
  });
});

//Themes
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
  "--color-dark-gray": "#f7f6f3",
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
const themes = [themeLight, themeDark];
const themesItems = document.querySelectorAll(".themes__items-item");
const themesBox = document.querySelector(".themes");
const themesButton = document.querySelectorAll(".navigation__button--theme");
const mainWrapper = document.querySelector(".main__wrapper");
const buttonReset = document.querySelector(".btn--reset");

buttonReset.addEventListener("click", function () {
  var currentTheme = themes[0];
  for (var i = 0; i < Object.keys(themeLight).length; i++) {
    var key = Object.keys(currentTheme)[i];
    document.documentElement.style.setProperty(key, `${currentTheme[key]}`);
  }
});

themesButton.forEach((el) => {
  el.addEventListener("click", function () {
    themesBox.classList.toggle("hidden");
  });
});
themesItems.forEach(function (el) {
  el.addEventListener("click", function () {
    var currentTheme = themes[el.dataset.value];
    for (var i = 0; i < Object.keys(themeLight).length; i++) {
      var key = Object.keys(currentTheme)[i];
      document.documentElement.style.setProperty(key, `${currentTheme[key]}`);
    }
  });
});

//testing.....
// var testBox = document.querySelector(".navigation");
// var pseudoBeforeHeight = window.getComputedStyle(testBox, ":before").height;
// document.querySelector(".navigation__buttons").style.marginTop =
//   pseudoBeforeHeight;
//....------------------------------------------------------------------
// themes.forEach((el) => {
//   var themeItem = `          <div class="themes__items-item">
//   <div class="themes__items-item-name">Light</div>
//     <div class="themes__items-item-colors">
//     <div class="themes__items-item-colors-color-primary">&nbsp;</div>
//     <div class="themes__items-item-colors-color-secondary">
//       &nbsp;
//     </div>
//     <div class="themes__items-item-colors-color-tertiary">&nbsp;</div>
//   </div>
//   </div>`;
//   var colorPrimary = document.querySelector(
//     ".themes__items-item-colors-color-primary"
//   );
//   var colorSecondary = document.querySelector(
//     ".themes__items-item-colors-color-primary-secondary"
//   );
//   var colorTertiary = document.querySelector(
//     ".themes__items-item-colors-color-tertiary"
//   );

//   // console.log(el["--color-background"]);
//   // console.log(Object.keys(el)[0]);
//   themesItems.insertAdjacentHTML("afterbegin", themeItem);
//   // document.documentElement.style.setProperty(``, '#YOURCOLOR');
// });

//manual method
// document.documentElement.style.setProperty(
//   "--color-background",
//   `${currentTheme["--color-background"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-primary",
//   `${currentTheme["--color-primary"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-primary-light",
//   `${currentTheme["--color-primary-light"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-primary-dark",
//   `${currentTheme["--color-primary-dark"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-secondary",
//   `${currentTheme["--color-secondary"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-tertiary",
//   `${currentTheme["--color-tertiary"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-text-primary",
//   `${currentTheme["--color-text-primary"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-text-secondary",
//   `${currentTheme["--color-text-secondary"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-nav-hover",
//   `${currentTheme["--color-nav-hover"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-gradient",
//   `${currentTheme["--color-gradient"]}`
// );
// document.documentElement.style.setProperty(
//   "--color-dark-gray",
//   `${currentTheme["--color-dark-gray"]}`
// );
