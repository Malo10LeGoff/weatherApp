window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let weather_icon = document.querySelector('.weather_icon');

    if(navigator.geolocation){ //This gonna show a pop-up when accessing the site to allow geolocation or not. If yes, then the condition is satisfied

        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            var key = '15575fafea0780d9f9a9b804663f73f5';
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid='+key)  
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                const temperatureDegree_fd = data.main.temp - 273;
                const locationTimezone_fd = data.name;
                const temperatureDescription_fd = data.weather[0].description;
                const icon = data.weather[0].icon;
                // fetch the icon
                var url = 'http://openweathermap.org/img/wn/' + icon + '.png';
                // Set DOM Elements from API
                temperatureDegree.textContent = Math.floor(temperatureDegree_fd);
                temperatureDescription.textContent = temperatureDescription_fd;
                locationTimezone.textContent = locationTimezone_fd;
                weather_icon.src = url;
            })

        });
    }
    else
    {
        h1.textContent = "This is not working because you did not give your geolocation or your browser doesn't support it"
    }
});