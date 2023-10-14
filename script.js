function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1500);
}

window.onload = fadeOut();

var i = 0;
var txt = "The Page is under construction! Stay tuned for further updates✌🏻";

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("js-typewrite")[0].innerHTML +=
      txt.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}

setTimeout(typeWriter, 1500);
