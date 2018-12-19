function setupDataList(asteroids, dataList) {
  asteroids.forEach(asteroid => {
    const option = `
    <option value=${asteroid.asteroidSpecs.name.replace(/\s/g, "")} 
    data-id="${asteroid.asteroidSpecs.id}">
    `;
    dataList.innerHTML += option;
  });
}

function clearDataList(dataList) {
  if (dataList.options.length > 0) {
    dataList.innerHTML = "";
  }
}

export { setupDataList, clearDataList };
