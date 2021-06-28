import React from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"
import Heart from "../Favourites/Heart"
import BG_clouds from "./BG_clouds.png"
import BG_rain from "./BG_rain.png"
import BG_snow from "./BG_snow.png"
import BG_sunny from "./BG_sunny.png"
import BG_storm from "./BG_storm.png"

const CurrentWeather = (props) => {

const city = props.city;

const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273 
  return celsius.toFixed(0)
}

  return(
   <>
   <div>         
        <div className="relative mt-6 mx-auto w-1/3 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" style={{ backgroundImage: city.weather[0].main === "Clouds" ? `url(${BG_clouds})` : city.weather[0].main === "Drizzle" ? `url(${BG_rain})` : city.weather[0].main === "Rain" ? `url(${BG_rain})`: city.weather[0].main === "Snow" ? `url(${BG_snow})` : city.weather[0].main === "Clear" ? `url(${BG_sunny})` : `url(${BG_storm})` }}>
       
        <div>
          <h5 className="text-3xl">{city.name}, {city.sys.country}</h5>
        </div>           
        
        <div className="p-4">  
       < LogoSwitch  weather= {city.weather[0].main } />            
          <h5 className="text-xs">{city.weather[0].main}</h5>
        </div>

        <div className="flex flex-col"> 
        <div className="flex"><img className="w-8 items-center " src="../image/heat.png" alt="termometro logo"></img>  <h5 className="text-3xl">{kelvinToCelsius(city.main.temp)}º  </h5>
         <h5 className="text-lg ml-2"> Feels like {kelvinToCelsius(city.main.feels_like)}º</h5></div> 
        </div>

     
        <div className="flex mt-3">
          <img className="w-8 items-center " src="../image/wind.png" alt="termometro logo"></img> <h5><strong>Wind Speed: {city.wind.speed}</strong></h5> 
        </div>

        <div className="flex items-center mt-3">
          <img className="w-8 items-center " src="../image/humidity.png" alt="termometro logo"></img><h5><strong>Humidity: {city.main.humidity}</strong></h5>
        </div>  
        {/* <img className="w-12 absolute right-10 bottom-4" src="./image/heart.png" alt="hear icon" />   */}
        <Heart className="w-16 absolute right-10 bottom-4"/>
      </div>
      </div> 
   </>   
    )
}

export default CurrentWeather