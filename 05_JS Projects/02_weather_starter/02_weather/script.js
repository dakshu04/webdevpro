document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = "3afb3f3d56ac3d6ce07860109058dde2"

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if(!city) return;
        //not guarantee that web request to server/databases will always sends you the result
        //so it may thrown you an error - very common thing
        //server/database is always in another continent, thatswhy use try catch for some error
        //and to wait for sometime for having our response we have to wait, so use async await
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            console.log("some error is there");
            showError()
        }
    })

    async function fetchWeatherData(city) {
        //gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);
        if(!response.ok) {
            throw new Error('City not found')
        }
        const data = await response.json()
        return data
    }

    function displayWeatherData(data) {
        //display
        console.log(data);
        const { name, main, weather } = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`
        descriptionDisplay.textContent = `Weather : ${weather[0].decription}`

        //unhide the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
    }

    function showError() {
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
    }
})