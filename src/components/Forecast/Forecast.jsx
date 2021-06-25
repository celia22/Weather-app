import React  from "react"
import LogoSwitch from "../LogoSwitch/LogoSwitch"
import BG_clouds from "../CurrentWeather/BG_clouds.png"
import BG_rain from "../CurrentWeather/BG_rain.png"
import BG_snow from "../CurrentWeather/BG_snow.png"
import BG_sunny from "../CurrentWeather/BG_sunny.png"
import BG_storm from "../CurrentWeather/BG_storm.png"




const Forecast = (props) => {

const forecast = props.forecast    
 
const toCelsius = (k) => {
  let celsius = k - 273
  return celsius.toFixed(0)
}

  const forecastMorning = []

  for ( let i = 0; i < forecast.list.length; i += 8){
    forecastMorning.push(forecast.list[i])
  }
  console.log("morning", forecastMorning)


  const forecastAfternoon= []

  for ( let i = 2; i < forecast.list.length; i += 8){
    forecastAfternoon.push(forecast.list[i])
  }

  console.log("after", forecastAfternoon)

   return(
     <>
    <h1>Daily Forecast</h1>  

    <div className="flex flex-wrap ml-36 mt-16 ">  
     
     {forecastMorning.map((item,index) => {      
        return(
        <>  
          <div className="mr-12 w-48 h-32 border border-gray-600 rounded-md px-3" key={index} >
            <div>        
            <h4>Morning</h4>
            < LogoSwitch weather= {item.weather[0].main } />          
              <h5>{item.weather[0].main}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
            </div>
  
          </div> 
         </>       
        )
      })}
      <div className="flex ">
    {forecastAfternoon.map((item,index) => {      
        return(
        <>  
          <div className=" mr-12 w-48 h-32 border border-gray-600 rounded-md px-3" key={index} >
            <div>        
            <h4>Afternoon</h4>
            < LogoSwitch weather= {item.weather[0].main } />         
              <h5>{item.weather[0].main}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
            </div>
  
          </div> 
         </>       
        )
      })}  
     </div> 
        
    </div>
    </>     
   )
}

export default Forecast


