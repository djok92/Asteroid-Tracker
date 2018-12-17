import redirect from "./index";
import { colorBars, animateBars } from "./bars";

const asteroidBarDisplay = document.querySelector(".asteroid-bar-display");
asteroidBarDisplay.innerHTML = "";

asteroidBarDisplay.innerHTML = JSON.parse(localStorage.getItem("Element"));

const timesAroundEarth = JSON.parse(localStorage.getItem("timesAroundEarth"));
const bars = document.querySelectorAll(".bar");

function displayBars() {
  bars.forEach((bar, index) => {
    colorBars(bar, timesAroundEarth[index]);
    animateBars(bar, 0, timesAroundEarth[index], 1500);
  });
}

displayBars();

const goBackButton = document.querySelector(".go-back");

goBackButton.addEventListener("click", function() {
  window.localStorage.clear();
  setTimeout(() => {
    redirect("index.html");
  }, 1500);
});
