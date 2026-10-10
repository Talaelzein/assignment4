const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");

const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error-message");
const weatherResult = document.querySelector("#weather-result");

async function getWeather(city) {
    loading.hidden = false;
    errorMessage.hidden = true;
    weatherResult.hidden = true;
    try {
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);


        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found. Please try again.");
            }
            
            if (response.status === 401) {
                throw new Error("Invalid API key. Please check your API key.");
            }
            if (response.status === 429) {
                throw new Error("Too many requests. Please try again later.");
            }
            throw new Error("Unable to fetch weather data. Please try again.");
        }

        const data = await response.json();
        
        document.querySelector("#city-name").textContent =`${data.name}, ${data.sys.country}`;
        document.querySelector("#temperature").textContent = Math.round(data.main.temp);
        document.querySelector("#description").textContent = data.weather[0].description;
        document.querySelector("#humidity").textContent = data.main.humidity;
        document.querySelector("#wind-speed").textContent = data.wind.speed;
        
        const icon = document.querySelector("#weather-icon");

        const weatherType = data.weather[0].main;
        const isNight = data.weather[0].icon.endsWith("n");
        
        let iconName = "cloud";
        
        if (weatherType === "Clear") {
            iconName = isNight ? "moon" : "sun";
        } else if (weatherType === "Clouds") {
            iconName = "cloud";
        } else if (weatherType === "Rain" || weatherType === "Drizzle") {
            iconName = "cloud-rain";
        } else if (weatherType === "Thunderstorm") {
            iconName = "cloud-lightning";
        } else if (weatherType === "Snow") {
            iconName = "cloud-snow";
        } else {
            iconName = "cloud-fog";
        }
        
        icon.className = iconName;
        icon.setAttribute("aria-label", data.weather[0].description);

        
        weatherResult.hidden = false;

    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.hidden = false;

    } finally {
        loading.hidden = true;
    }
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.hidden = false;
        weatherResult.hidden = true;
        return;
    }

    getWeather(city);
});

