import fetchTravelingData from "./async-get-traveling-data";

function colorBars(bar, value) {
  if (value < 25) {
    bar.style.backgroundColor = "green";
  } else if (value > 25 && value < 45) {
    bar.style.backgroundColor = "yellow";
  } else if (value > 45 && value < 75) {
    bar.style.backgroundColor = "orange";
  } else {
    bar.style.backgroundColor = "red";
  }
}

function animateBars(obj, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  const timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    obj.style.width = `${end * 3}px`;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function generateBars(arr) {
  const timesAroundEarth = [];
  const barsContainer = document.createElement("div");

  arr.forEach(item => {
    const id = item.getAttribute("data-id");

    fetchTravelingData(id).then(data => {
      const eachTime = data.close_approach_data.map(date => {
        return (
          Number(date.close_approach_date.substring(0, 4)) > 1900 &&
          Number(date.close_approach_date.substring(0, 4)) < 1999
        );
      }).length;
      timesAroundEarth.push(eachTime);

      barsContainer.innerHTML += `<span class="bar-name">${
        data.name
      }</span><div class="bar"></div>`;

      localStorage.setItem("Element", JSON.stringify(barsContainer.innerHTML));
      localStorage.setItem(
        "timesAroundEarth",
        JSON.stringify(timesAroundEarth)
      );
    });
  });
}

export { colorBars, animateBars, generateBars };
