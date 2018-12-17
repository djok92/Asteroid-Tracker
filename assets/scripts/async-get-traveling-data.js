async function getTravelingData(id) {
  const apiKey = "x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";
  const api = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`;
  const apiCall = await fetch(api);
  const data = await apiCall.json();
  return data;
}

export default getTravelingData;
