async function fetchAsteroids(startDate, endDate) {
  let apiCall;
  let data;
  const apiKey = "x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";
  const api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
  apiCall = await fetch(api);
  data = await apiCall.json();

  if (data.code === 400) {
    alert(data.error_message);
    return;
  } else {
    return data;
  }
}

export default fetchAsteroids;
