document.addEventListener("DOMContentLoaded", () => {
    const weatherInfo = document.getElementById("weather-container");
    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("city");

    searchBtn.addEventListener("click", () => {
        const city = cityInput.value; 
        const apiKey = "af584cf69716c2079d3bc8798e9a043a"; 

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const cityName = data.name; 
                const temperature = Math.round(data.main.temp -272.15);
                const description = data.weather[0].description;

                // Changing the UI depending on the data
                const weatherHTML = `
                    <h1 id="city">${cityName}</h1>
                    <h3><span id="temp">${temperature}</span>&deg;C</h3>
                    <h1 id="status" class="lead">${description}</h1>
                `;

                weatherInfo.innerHTML = weatherHTML;
            })
            .catch(err => console.log(err));
    });
});
