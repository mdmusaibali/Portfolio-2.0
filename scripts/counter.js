var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/mdmusaibali.com/mdmusaibali.com");
xhr.responseType = "json";
xhr.onload = function () {
  document.getElementById("visits").innerText = this.response.value;
};
xhr.send();
