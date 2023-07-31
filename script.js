const apiKey = "aa4fec6c310df80f65e04e7256844f13";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#search-bar input");
const weatherImg = document.querySelector(".weather-img");
const searchBar = document.querySelector("#search-icon");
const description = document.querySelector(".description");
const locNotFnd = document.querySelector(".location-not-found");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  description.innerHTML = "<em>" + `${data.weather[0].description}` + "</em>";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.cod === "404") {
    locNotFnd.style.display = "flex";
    console.log("error");
    return;
  }
}
searchBar.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
