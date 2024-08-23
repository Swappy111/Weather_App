const apiKey ="9192753a2290f80bc03b0d5ac340c8dd";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json(); 

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather_images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather_images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather_images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather_images/mist.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather_images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "weather_images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    }

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
