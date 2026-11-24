const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'b33a8a4b4ef108e8bcda36a96e7cc151'
const diffkelvin = 273.15


document.getElementById('searchButton').addEventListener('click', () => {
    const city= document.getElementById('cityInput').value;
    if(city){
        //llamar a la Api para que nos de la informacion del clima 
        fetchWeather(city)
    }else{
        alert('Ingrese una ciudad valida')
    }

})

function fetchWeather(city){
   fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResonseData = document.getElementById('responseData')
    divResonseData.innerHTML = ''

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
   cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffkelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png` //verificar en la documentacion como mostrar una imagen


    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorologica es ${description}`


    divResonseData.appendChild(cityInfo)
    divResonseData.appendChild(tempInfo)
    divResonseData.appendChild(humidityInfo)
    divResonseData.appendChild(iconInfo)
    divResonseData.appendChild(descriptionInfo)

    
}