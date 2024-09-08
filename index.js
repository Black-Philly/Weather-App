document.getElementById("getWeather").addEventListener(`click`, function(){
    const apiKey = '4bcf7f0814e79205596724bf3be99e37';

    const city = document.getElementById(`cityInput`).value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang={lang}`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                document.getElementById(`location`).textContent = data.name;

                document.getElementById(`temperature`).textContent = data.main.temp;

                document.getElementById(`humidity`).textContent = data.main.humidity;

                document.getElementById(`description`).textContent = data.weather[0].description;

                document.getElementById(`windspeed`).textContent = data.wind.speed;

                document.getElementById(`winddir`).textContent = data.wind.deg;

                document.getElementById(`country`).textContent = data.sys.country;

                document.getElementById(`sunrise`).textContent = data.sys.sunrise;

                document.getElementById(`sunset`).textContent = data.sys.sunset;

               
            }).catch(error => {

                console.error("Error fetching the weather data", error);

        });

})