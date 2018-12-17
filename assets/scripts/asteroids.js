function filterDangerousAsteroids(obj) {
  let date;
  let specs;
  let data = [];

  for (let key in obj) {
    obj[key].forEach((item, index) => {
      if (obj[key][index].is_potentially_hazardous_asteroid === true) {
        date = key;
        specs = item;
        data.push({ date: date, asteroidSpecs: specs });
      }
    });
  }
  return data;
}

function setupAsteroidSearch() {
  const asteroidInput = document.querySelector(".input-for-table");
  const dataListOptions = document.querySelectorAll("option");
  const selectedAsteroidsList = document.querySelector(".selected-asteroids");
  asteroidInput.addEventListener("keypress", function(e) {
    if (e.which === 13) {
      dataListOptions.forEach(option => {
        if (option.value === this.value) {
          const selectedAsteroid = document.createElement("li");
          selectedAsteroid.setAttribute(
            "data-id",
            option.getAttribute("data-id")
          );
          selectedAsteroid.innerHTML = `${
            option.value
          }<i class="fas fa-times"></i>`;
          selectedAsteroid.classList.add("selected-asteroid");
          selectedAsteroidsList.appendChild(selectedAsteroid);
          option.remove();
          this.value = "";
        }
      });
    }
  });
}

function setupAsteroidList(datalist) {
  const deletedAsteroid = document.createElement("option");
  const selectedAsteroidsList = document.querySelector(".selected-asteroids");
  selectedAsteroidsList.addEventListener("click", function(e) {
    if (e.target.parentElement.classList.contains("selected-asteroid")) {
      e.target.parentElement.remove();
      deletedAsteroid.setAttribute("value", e.target.parentElement.textContent);
      deletedAsteroid.setAttribute(
        "data-id",
        e.target.parentElement.getAttribute("data-id")
      );
      datalist.appendChild(deletedAsteroid);
    }
  });
}

export { filterDangerousAsteroids, setupAsteroidSearch, setupAsteroidList };
