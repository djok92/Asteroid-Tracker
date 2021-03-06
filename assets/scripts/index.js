import fetchAsteroids from "./async-fetch-asteroids";
import { setupDataList, clearDataList } from "./datalist";
import { inputChecker, parseDate, dateDifference } from "./input-and-date";
import { createTableHeader, createTableBody } from "./table";
import {
  filterDangerousAsteroids,
  setupAsteroidSearch,
  setupAsteroidList
} from "./asteroids";
import { generateBars } from "./bars";
import "jquery";
import "stupid-table-plugin";

jQuery("#table").stupidtable();

function redirect(page) {
  window.location = page;
}

const getTableButton = document.querySelector(".show-table");
const dataList = document.querySelector("#datalist-asteroids");
if (getTableButton) {
  getTableButton.addEventListener("click", function() {
    clearDataList(dataList);
    handleData();
    window.localStorage.clear();
  });
}

function handleData() {
  const startDate = document.querySelector(".container-start__input");
  const endDate = document.querySelector(".container-end__input");
  if (inputChecker(startDate, endDate)) {
    const dataList = document.querySelector("#datalist-asteroids");
    const asteroidTable = document.querySelector(".asteroid-table");
    const inputAndList = document.querySelector(
      ".asteroid-suggestion-and-list"
    );

    const headerData = [
      "Datum",
      "Ime",
      "Brzina Kretanja(km/h)",
      "Min Prečnik(m)",
      "Max Prečnik(m)"
    ];

    fetchAsteroids(startDate.value, endDate.value).then(data => {
      asteroidTable.innerHTML = "";
      const validAsteroids = filterDangerousAsteroids(data.near_earth_objects);
      createTableHeader(headerData, asteroidTable);
      createTableBody(validAsteroids, asteroidTable);
      inputAndList.style.display = "flex";

      setupDataList(validAsteroids, dataList);
      setupAsteroidSearch();
      setupAsteroidList(dataList);
    });
  }
}

function handleTimesAroundEarthClick() {
  const timesTraveledBtn = document.querySelector(".times-traveled");
  const asteroidsToBeShown = document.querySelectorAll(".selected-asteroid");
  if (timesTraveledBtn) {
    timesTraveledBtn.addEventListener("click", function() {
      if (asteroidsToBeShown.length > 0) {
        generateBars(asteroidsToBeShown);
        return (function() {
          setTimeout(() => {
            redirect("results.html");
          }, 1500);
        })();
      } else {
        alert("Please select asteroids from table!");
      }
    });
  }
}

handleTimesAroundEarthClick();

export default redirect;
