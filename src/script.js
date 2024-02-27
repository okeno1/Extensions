async function fetchData() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=70fd5a220ebb0b11b9fe6fc2d272bd20"
  );
  const record = await res.json();
  console.log(record);
  document.getElementById("longitude").innerHTML = record.coord.lon;
  document.getElementById("latitude").innerHTML = record.coord.lat;
  document.getElementById("weather").innerHTML = record.weather[0].description;
  document.getElementById("humidity").innerHTML = record.main.humidity;
  document.getElementById("windspeed").innerHTML = record.wind.speed;
}
fetchData();
