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
    for (let i = 0; i < dataList.options.length; i++) {
      dataList.options[i].value = null;
    }
  }
}

export { setupDataList, clearDataList };
