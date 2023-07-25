const input = document.querySelector("#location");
const container = document.querySelector(".container");
const weather = document.querySelector(".weather");
const notFound = document.querySelector(".not-found");
const weatherDetail = document.querySelector("#weather-description");
const locat = document.querySelector("#city").querySelector("h4");
const Checkin = document.querySelectorAll('input[name="temp"]');



input.focus();

let getWeather = (location,unit)=>{

    const APIkey = ''; //api key openweather
    const city = location;
    if(city == ''){
        
        return;
    }

    switch(unit){
        case 'standard':
            document.querySelector("#radioC").innerText = "°F";
            break;
        case 'metric':
            document.querySelector("#radioC").innerText = "°C";
            break;
        
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${unit}`).then(response =>response.json())
    .then(data =>
        {
           

            if(data.cod ==404){
                weather.style.display = "none";
                notFound.style.display = "block";
                weatherDetail.innerText ="";
                return;
            }
            notFound.style.display = "none";
            weather.style.display = "flex";

            const temperature = document.querySelector("#temperature");
            temperature.innerHTML = `${Math.floor(data.main.temp)}`;

            const humidity = document.querySelector("#humidity");
            humidity.innerHTML = `${Math.floor(data.main.humidity)}`;

            const wind = document.querySelector("#wind");
            wind.innerHTML = `${data.wind.speed.toFixed(1)}`;
            
            const feels = document.querySelector("#feels");
            feels.innerHTML = `${Math.floor(data.main.feels_like)}`;

            weatherDetail.innerText = ` ,${data.weather[0].description}`;
            

            locat.innerText = `${data.name}, ${data.sys.country}`;

            const weatherImg = document.querySelector(".weather-img");

            switch(data.weather[0].main){
                case 'Clear':
                    weatherImg.src= "/images/clear.png";
                    break;

                case 'Rain':
                    weatherImg.src= "/images/raining.png";
                    break;

                case 'Snow':
                    weatherImg.src= "/images/snow.png";
                    break;

                case 'Clouds':
                    weatherImg.src= "/images/cloud.png";
                    break;

                case 'Haze':
                    weatherImg.src= "/images/haze-1.png";

                    break;
            }
            
            
        }
    )

}

input.addEventListener("keypress",(e)=>{
    if(e.keyCode == 13){
        container.style.height = "100%";
        let checkRadio = document.querySelector('input[name="temp"]:checked');
        
        getWeather(input.value,checkRadio.value);
    }
})

Checkin.forEach(e=>{
    e.addEventListener('change',function(){
        container.style.height = "100%";
        let checkRadio = document.querySelector('input[name="temp"]:checked');
        
        getWeather(input.value,checkRadio.value);
    })
})






function expandInput(inputElement) {
    
    var content = inputElement.value;
    var contentLength = content.length;
    var newWidth = (contentLength * 20) + "px"; 
    if(contentLength == 0){
        newWidth = "7%";
    }
    
    
    inputElement.style.width = newWidth;
  }

