import React  from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"

const Forecast = (props) => {

  const forecast = props.forecast    
 

const toCelsius = (k) => {
  let celsius = k - 273
  return celsius.toFixed(0)
}

// const handleLogo = () => {
//   let  src = < LogoSwitch weather= {forecast.list[0].weather[0].main } />
//   return src
//  }

  const list = forecast.list
  const forecastArray = []

  for ( let i = 3; i < list.length; i += 8){
    forecastArray.push(list[i])
  }
  console.log(forecastArray)  

   return(
      forecastArray.map((item,index) => {
        return(
        <div className="flex flex-row flex-nowrap w-full  bg-blue-300">          
          <div className="m-12 w-44 h-44 rounded-md bg-gray-300" key={index}>
            <h1>Forecast</h1>
            <div>        
              <img src="" alt="weather logo" />          
              <h5>{item.weather[0].main}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Max temp: {toCelsius(item.main.temp_max)}º</h5>
            </div>
          
            <div className="flex">
              <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img><h5>Min temp: {toCelsius(item.main.temp_min)}º</h5>
              </div>  
          </div>
        </div> 
          )
         })
   )
}

export default Forecast


