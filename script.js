
    
const apikey = "d2c4746aa1d8758054e233226368de3f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const seachbox = document.getElementById("inpt");
const seachbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon") ;



async function checkweather(){
    const response = await fetch(apiurl + seachbox.value + `&appid=${apikey}`);

     if(response.status ==404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
     }
    
     else{
        var Data = await response.json();
    console.log(Data); 
    document.querySelector(".temp").innerHTML = Math.round(Data.main.temp)+" °C";
document.querySelector(".city").innerHTML = Data.name;
document.querySelector(".humidity").innerHTML = Data.main.humidity + " %";
document.querySelector(".wind").innerHTML = Data.wind.speed + " km/h";

if(Data.weather[0].main== "Clouds"){
weathericon.src = "images/clouds.png"
}
else if(Data.weather[0].main== "Rain"){
weathericon.src = "images/rain.png"
}
else if(Data.weather[0].main== "Drizzle"){
weathericon.src = "images/drizzle.png"
}
else if(Data.weather[0].main== "Mist"){
weathericon.src = "images/mist.png"
}
else if(Data.weather[0].main== "Snow"){
weathericon.src = "images/snow.png"
}
else if(Data.weather[0].main== "Clear"){
weathericon.src = "images/clear.png"
}
document.querySelector(".weather").style.display ="block"
document.querySelector(".error").style.display ="none"
     }

    
 



}

seachbtn.addEventListener('click' , ()=>{
    checkweather()
})
