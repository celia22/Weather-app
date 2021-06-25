import React from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"
import BG_clouds from "./BG_clouds.png"
import BG_rain from "./BG_rain.png"
import BG_snow from "./BG_snow.png"
import BG_sunny from "./BG_sunny.png"
import BG_storm from "./BG_storm.png"

const CurrentWeather = (props) => {

  const city = props.city;
  let src = "";

 const timeConverter = (UNIX_timestamp) => {
  let a = new Date(UNIX_timestamp * 1000);

  let hour = a.getHours();
  let min = a.getMinutes();

  let time = ' ' + hour + ':' + min ;
  return time;
}

const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273 
  return celsius.toFixed(0)
}




  return(
   <> 
    <h1>Current Weather</h1>
      <div className="mt-16 ml-64 w-72 h-76 border border-gray-600" style={{ backgroundImage: city.weather[0].main === "Clouds" ? `url(${BG_clouds})` : city.weather[0].main === "Drizzle" ? `url(${BG_rain})` : city.weather[0].main === "Rain" ? `url(${BG_rain})`: city.weather[0].main === "Snow" ? `url(${BG_snow})` : city.weather[0].main === "Clear" ? `url(${BG_sunny})` : `url(${BG_storm})` }}>
       
        <div>
          <h5>{city.name}</h5>
          <h5>{city.sys.country}</h5>   
        </div>           
        
        <div>       
        
       < LogoSwitch weather= {city.weather[0].main } />            
          <h5>{city.weather[0].main}</h5>
        </div>

        <div className="flex"> 
         <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Max temp: {kelvinToCelsius(city.main.temp_max)}º</h5>
        </div>

        <div className="flex">
        <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img><h5>Min temp: {kelvinToCelsius(city.main.temp_min)}º</h5>
        </div>       
        
        <div className="flex">
          <img className="w-8 items-center" src="../image/sunrise.png" alt="sunrise logo"></img> <h5>Sunrise time: {timeConverter(city.sys.sunrise)}</h5> 
        </div>

        <div className="flex items-center">
          <img className="w-8" src="../image/sunset.png" alt="sunrise logo"></img><h5>Sunset time: {timeConverter(city.sys.sunset)}</h5>
        </div>  
       
      </div>
   </>   
    )
}

export default CurrentWeather