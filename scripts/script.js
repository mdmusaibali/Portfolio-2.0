"use strict";
// document.documentElement.style.setProperty("--color-primary", "#00d1b2");
const navMobileItems = document.querySelector(".navigation__items--mobile");
const navButton = document.querySelector(".navigation__button--options");
const headerFunText = document.querySelectorAll(".header__fun-text");
navButton.addEventListener("click", function (e) {
  navMobileItems.classList.toggle("visible");
});

//Test
//Fun Text Generator
// function generateRandom(min = 0, max = 100) {
//   let difference = max - min;
//   let rand = Math.random();
//   rand = Math.floor(rand * difference);
//   rand = rand + min;
//   return rand;
// }
const funTexts = [
  "i love watching anime ❤",
  "i can fall asleep anywhere 😴",
  "a hard working person",
  "i'm gonna be hokage one day 😁",
  "i think there's a monster under my bed 😥",
  "in constant state of learning something new",
  "i think black is an emotion",
  "i would like to be your friend😄",
];
var count = 0;

headerFunText.forEach((el) => {
  el.addEventListener("click", function () {
    el.textContent = funTexts[count++];
    if (count >= funTexts.length) count = 0;
  });
});
//Automatic changes to fun text for 3 times
function timer() {
  var sec = 2;
  var timer = setInterval(function () {
    headerFunText[0].textContent = funTexts[count++];
    // if (count >= funTexts.length) count = 0;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 2500);
}
timer();
