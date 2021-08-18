import React  from "react"
import LogoSwitch from "../LogoSwitch/LogoSwitch"
import getWeekDay from "../../helpers/getWeekDay"

const Forecast = (props) => {

const forecast = props.forecast    
 
const toCelsius = (k) => {
  let celsius = k - 273
  return celsius.toFixed(0)
}

  const fiveDayForecast = []
  let temp = [];

  console.log(forecast.data.list.length)

  for ( let i = 0; i < forecast.data.list.length; i++){    
    if(i % 7 === 0 && i !== 0) {
      temp.push(forecast.data.list[i])
      fiveDayForecast.push(temp)
      temp = []
    } 
    temp.push(forecast.data.list[i])
  }

  console.log("forecast", fiveDayForecast)


  let minTempForecast = [];
  let maxTempForecast = [];

  for (let i = 0; i < fiveDayForecast.length; i++){
    let tempMin = 700;
    let tempMax = 0;
    for (let j = 0; j < fiveDayForecast[i].length; j++){
       if(fiveDayForecast[i][j].main.temp_min < tempMin){
        tempMin = fiveDayForecast[i][j].main.temp_min
        minTempForecast.push(tempMin)
      }
      if(fiveDayForecast[i][j].main.temp_max > tempMax){
        tempMax = fiveDayForecast[i][j].main.temp_max
        maxTempForecast.push(tempMax)
      }
      tempMin = 0;
      tempMax = 700;
    }
    
  }
console.log(minTempForecast)
console.log(maxTempForecast)


   return(
     <>
    <div className="flex flex-wrap ml-36 mt-16">  
     
     {/* {forecastMorning.map((item,index) => {      
        return(
        <>  
          <div className="mr-12 w-48 h-40 pt-4 border-t-2 border-l-2 border-r-2 border-gray-600 px-3 rounded-tl-lg rounded-tr-lg bg-white" key={index} >
            <div> 
              <h3>{getWeekDay(item.dt_txt)}</h3>       
            <h4><strong>Morning </strong></h4>
            < LogoSwitch weather= {item.weather[0].main } />          
              <h5>{item.weather[0].description}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/heat.png" alt="termometro logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
            </div>
  
          </div> 
         </>       
        )
      })} */}
      <div className="flex ">
    {/* {forecastAfternoon.map((item,index) => {      
        return(
        <>  
          <div className=" mr-12 w-48 h-36 border-b-2 border-l-2 border-r-2 border-gray-600 px-3 shadow-lg rounded-bl-lg rounded-br-lg bg-white" key={index} >
            <div>        
            <h4><strong>Afternoon </strong></h4>
            < LogoSwitch weather= {item.weather[0].main } />         
              <h5>{item.weather[0].main}</h5>
            </div>
          
            <div className="flex"> 
              <img className="w-8 items-center" src="../image/heat.png" alt="termometer logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
            </div>
  
          </div> 
         </>       
        )
      })}   */}
     </div> 
        
    </div>
    </>     
   )
}

export default Forecast


// const Forecast = (props) => {

//   const forecast = props.forecast    
   
//   const toCelsius = (k) => {
//     let celsius = k - 273
//     return celsius.toFixed(0)
//   }
  
//     const forecastMorning = []
  
//     for ( let i = 0; i < forecast.data.list.length; i += 8){
//       forecastMorning.push(forecast.data.list[i])
//     }
  
//     const forecastAfternoon= []
  
//     for ( let i = 2; i < forecast.data.list.length; i += 8){
//       forecastAfternoon.push(forecast.data.list[i])
//     }
  
//      return(
//        <>
//       <div className="flex flex-wrap ml-36 mt-16">  
       
//        {forecastMorning.map((item,index) => {      
//           return(
//           <>  
//             <div className="mr-12 w-48 h-40 pt-4 border-t-2 border-l-2 border-r-2 border-gray-600 px-3 rounded-tl-lg rounded-tr-lg bg-white" key={index} >
//               <div> 
//                 <h3>{getWeekDay(item.dt_txt)}</h3>       
//               <h4><strong>Morning </strong></h4>
//               < LogoSwitch weather= {item.weather[0].main } />          
//                 <h5>{item.weather[0].description}</h5>
//               </div>
            
//               <div className="flex"> 
//                 <img className="w-8 items-center" src="../image/heat.png" alt="termometro logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
//               </div>
    
//             </div> 
//            </>       
//           )
//         })}
//         <div className="flex ">
//       {forecastAfternoon.map((item,index) => {      
//           return(
//           <>  
//             <div className=" mr-12 w-48 h-36 border-b-2 border-l-2 border-r-2 border-gray-600 px-3 shadow-lg rounded-bl-lg rounded-br-lg bg-white" key={index} >
//               <div>        
//               <h4><strong>Afternoon </strong></h4>
//               < LogoSwitch weather= {item.weather[0].main } />         
//                 <h5>{item.weather[0].main}</h5>
//               </div>
            
//               <div className="flex"> 
//                 <img className="w-8 items-center" src="../image/heat.png" alt="termometer logo"></img>  <h5>Temp {toCelsius(item.main.temp_max)}º</h5>
//               </div>
    
//             </div> 
//            </>       
//           )
//         })}  
//        </div> 
          
//       </div>
//       </>     
//      )
//   }
  
//   export default Forecast