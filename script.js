document.addEventListener("DOMContentLoaded", () => {
    const weatherInfo = document.getElementById("weather-container");
    const searchBtn = document.getElementById("searchBtn");
    const locationInput = document.getElementById("location");

    searchBtn.addEventListener("click", () => {
        const location = locationInput.value.trim();
        if (location === "") {
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=af584cf69716c2079d3bc8798e9a043a`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
            .then((data) => {
                console.log(data);
                const cityName = data.name;
                const temperature = Math.round(data.main.temp - 273.15);
                const description = data.weather[0].description;

                const weatherHTML = `
                    <h1 id="city">${cityName}</h1>
                    <h3><span id="temp">${temperature}</span>&deg;C</h3>
                    <h1 id="status" class="lead">${description}</h1>
                `;

                weatherInfo.innerHTML = weatherHTML;
            })
            .catch((err) => {
                console.error(err);
            });
    });
});
