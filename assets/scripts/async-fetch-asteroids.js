async function fetchAsteroids(startDate, endDate) {
  const apiKey = "x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";
  const api = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
  const apiCall = await fetch(api);
  const data = await apiCall.json();
  return data;
}

export default fetchAsteroids;
