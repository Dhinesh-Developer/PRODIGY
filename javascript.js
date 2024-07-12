async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; 
    const city = document.getElementById('cityInput').value;
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);  // Debugging: Log the API response to the console

        if (response.ok) {
            document.getElementById('weatherResult').innerHTML = `
                <p>Weather in ${data.name}:</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = <p>Error: ${data.message}</p>;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);  // Debugging: Log errors to the console
        document.getElementById('weatherResult').innerHTML = <p>Failed to fetch weather data. Please check the city name or your internet connection.</p>;
    }
}
