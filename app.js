const API_KEY = "21805bff7224936fa25d6cec016a0a4b"
const searchBox = document.querySelector("#search_box");
const loader = document.querySelector(".loading")
const contant = document.querySelector(".contant")
const weather_icon = document.querySelector(".weather_icon")
const city_not_found = document.querySelector(".city_not_found");


async function checkWeather(event) {
    loader.style.display = "flex";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${API_KEY}&units=metric`;

    const response = await fetch(api);
    if (response.status == 200) {
        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".description").innerHTML = data.weather[0].description;
        if (data.weather[0].main == "Clear") {
            weather_icon.src = "images/clear.png"
            // weather_icon.setAttribute(`src`, "images/clear.png")
        } else if (data.weather[0].main == "Clouds") {
            weather_icon.src = "images/clouds.png"
            // weather_icon.setAttribute(`src`, "images/clouds.png")
        }
        else if (data.weather[0].main == "Rain") {
            weather_icon.src = "images/rain.png"
            // weather_icon.setAttribute(`src`, "images/rain.png")
        } else {
            weather_icon.src = "images/weather02-512.webp"
        }
        // console.log(data.weather[0].main);
        loader.style.display = "none";
        contant.style.display = "block"
        city_not_found.style.display = "none";
    }
    else {
        city_not_found.style.display = "flex";
        contant.style.display = "none"
        loader.style.display = "none";
    }
}

searchBox.addEventListener(
    "keyup",
    (event) => {
        if (event.key == "Enter") {
            checkWeather();
        }
    }

)

// checkWeather();


