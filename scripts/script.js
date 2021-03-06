"use strict";

const headerFunText = document.querySelectorAll(".header__fun-text");
if (headerFunText.length != 0) {
  const funTexts = [
    "i love watching anime โค",
    "i can fall asleep anywhere ๐ด",
    "a hard working person",
    "i'm gonna be hokage one day ๐",
    "i think there's a monster under my bed ๐ฅ",
    "in constant state of learning something new",
    "i think black is an emotion",
    "i would like to be your friend๐",
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
}
