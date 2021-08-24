import React  from "react"
import LogoSwitch from "../LogoSwitch/LogoSwitch"
import getWeekDay from "../../helpers/getWeekDay"
import "./Forecast.css"

const Forecast = (props) => {

const forecast = props.forecast    
 
const toCelsius = (k) => {
  let celsius = k - 273
  return celsius.toFixed(0)
}

const fiveDayForecast = []
  let temp = [];

  for ( let i = 0; i < forecast.data.list.length; i++){    
    if(i % 7 === 0 && i !== 0) {
      temp.push(forecast.data.list[i])
      fiveDayForecast.push(temp)
      temp = []
    } 
    temp.push(forecast.data.list[i])
  }

  let minTempForecast = [];
  let maxTempForecast = [];

  for (let i = 0; i < fiveDayForecast.length; i++){
    let tempMin = 700;
    let tempMax = 0;
    for (let j = 0; j < fiveDayForecast[i].length; j++){
       if(fiveDayForecast[i][j].main.temp_min < tempMin){
        tempMin = fiveDayForecast[i][j].main.temp_min       
      }
      if(fiveDayForecast[i][j].main.temp_max > tempMax){
        tempMax = fiveDayForecast[i][j].main.temp_max       
      } 
    }   
    minTempForecast.push(tempMin)
    maxTempForecast.push(tempMax)
    tempMin = 700
    tempMax = 0; 
  }

console.log("forecast",fiveDayForecast)



   return(
     <>
    <div className="forecast_card_container">  
     
     {fiveDayForecast.map((item, index) => {      
        return(
      
          <div className="forecast_card" key={index}>
        {item.slice(3,4).map((item,index) => {
          return(
           <div  key={index} >
           <div> 
             <h3>{getWeekDay(item.dt_txt)}</h3>       
             < LogoSwitch weather= {item.weather[0].main } />          
             <h5>{item.weather[0].description}</h5>
           </div>
         </div> 
          )
        })}  
          <div className="flex"> 
         <img className="w-8 items-center" src="../image/heat.png" alt="termometro logo"></img>
         <h5 >Min {toCelsius(minTempForecast[index])}º</h5>
         <h5 >Max {toCelsius(maxTempForecast[index])}º</h5>
         </div>
         </div>       
        
        )
        
      })}
              
    </div>
    </>     
   )
}

export default Forecast

