const apiKey = "aa4fec6c310df80f65e04e7256844f13";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
}
checkWeather();
