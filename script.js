function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "b06cbdfe5c4f3a3a3fb4bea187b6a000";
    const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    fetch(url + city + "&appid=" + apiKey) 
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = data.main.temp;
                const humidity = data.main.humidity;
                document.getElementById("weather-result").innerHTML = `
                    <p><strong>${data.name}</strong></p>
                    <p>Weather: ${weather}</p>
                    <p>Temperature: ${temp}°C</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            } else {
                document.getElementById("weather-result").innerHTML = `
                    <p>Error: ${data.message}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("weather-result").innerHTML = `
                <p>Error: Unable to fetch data. Check your connection.</p>
            `;
        });
}

document.getElementById("get-weather").addEventListener("click", getWeather);
