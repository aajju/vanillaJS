const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

API_KEY = "0d7d32fbdd2ad63be71f8fb5df39ee57";

function positionOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  //   console.log(url);
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function positionError() {
  alert("We can't get your location");
}

navigator.geolocation.getCurrentPosition(positionOk, positionError);

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     city.innerText = data.name;
//     weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//   });
