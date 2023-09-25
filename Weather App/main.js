const apikey = "0e9f18527f14451ebd374425231609";
const urlApi = "http://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(country) {
  const response = await fetch(
    urlApi + `?key=${apikey}` + `&q=${country}&aqi=yes`
  );
  console.log(response);

  if (response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    const data = await response.json();
    console.log(data);

    if (data.current.cloud < 20) {
      weatherIcon.src = "images/clear.png";
    } else if (data.current.cloud >= 20 && data.current.cloud < 40) {
      weatherIcon.src = "images/mist.png";
    } else if (data.current.cloud >= 40 && data.current.cloud < 60) {
      weatherIcon.src = "images/clouds.png";
    } else if (data.current.cloud >= 60 && data.current.cloud < 80) {
      weatherIcon.src = "images/rain.png";
    } else if (data.current.cloud >= 80 && data.current.cloud < 100) {
      weatherIcon.src = "images/drizzle.png";
    }

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + " °C";
    document.querySelector(".humidity").innerHTML =
      data.current.humidity + " %";
    document.querySelector(".wind").innerHTML =
      data.current.wind_degree + " Km/h";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

//  when press enter in key board

document.addEventListener("keydown", (event) => {
  //   console.log(event.key);
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

// checkWeather();
