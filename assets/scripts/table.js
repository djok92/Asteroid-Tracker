function createTableHeader(headerData, table) {
  const header = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headerData.forEach(item => {
    const headerRowCategories = document.createElement("th");
    headerRowCategories.classList.add("header-item");
    headerRowCategories.setAttribute("data-sort", "int");
    headerRowCategories.innerHTML = item;
    headerRow.appendChild(headerRowCategories);
  });
  header.appendChild(headerRow);
  table.appendChild(header);
}

function createTableBody(asteroids, table) {
  const tableBody = document.createElement("tbody");
  asteroids.forEach(asteroid => {
    const asteroidRow = document.createElement("tr");
    const asteroidDisplayData = [];
    asteroidDisplayData.push(
      asteroid.date,
      asteroid.asteroidSpecs.name,
      asteroid.asteroidSpecs.close_approach_data[0].relative_velocity
        .kilometers_per_hour,
      asteroid.asteroidSpecs.estimated_diameter.meters.estimated_diameter_max,
      asteroid.asteroidSpecs.estimated_diameter.meters.estimated_diameter_min
    );
    asteroidDisplayData.forEach(item => {
      const asteroidDataCell = document.createElement("td");
      asteroidDataCell.innerHTML = item;
      asteroidRow.appendChild(asteroidDataCell);
    });
    tableBody.appendChild(asteroidRow);
  });
  table.appendChild(tableBody);
}

export { createTableHeader, createTableBody };
