import React  from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"

const Forecast = (props) => {

  const forecast = props.forecast    
 
  console.log(forecast)  

const toCelsius = (k) => {
  let celsius = k - 273
  return celsius.toFixed(0)
}

let  src;
const handleLogo = () => {
  src = < LogoSwitch weather= {forecast.list[0].weather[0].main } />
  return src
 }


  const forecastArray = []

  for ( let i = 3; i < forecast.list.length; i += 8){
    forecastArray.push(forecast.list[i])
  }
  console.log(forecastArray)  

   return(
    <div className="flex bg-blue-300">  
    <h1>Daily Forecast</h1>   
     {forecastArray.map((item,index) => {
        return(               
          <div className="mt-12 mr-12 w-40 h-40 rounded-md bg-gray-300" key={index}>
            <div>        
              <img src={src}alt="weather logo" />          
              <h5>{item.weather[0].main}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Max temp: {toCelsius(item.main.temp_max)}º</h5>
            </div>
          
            <div className="flex">
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img><h5>Min temp: {toCelsius(item.main.temp_min)}º</h5>
              </div>  
          </div>       
          )
         })}
    </div>     
   )
}

export default Forecast


