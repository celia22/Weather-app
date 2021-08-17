import React, { Component } from "react"

import LogoSwitch from "../components/LogoSwitch/LogoSwitch"
import Navbar from "../components/Navbar/Navbar"
// import Forecast from "../components/Forecast/Forecast";
// import BG_clouds from "./BG_clouds.png"
// import BG_rain from "./BG_rain.png"
// import BG_snow from "./BG_snow.png"
// import BG_sunny from "./BG_sunny.png"
// import BG_storm from "./BG_storm.png"


class CurrentWeather extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: this.props.city,
      status: "loading",
      heartIsClicked: false
    }
  }


kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273 
  return celsius.toFixed(0)
}

// componentDidUpdate(prevProps, prevState){
//   if (prevState.city !== this.props.city){ 
//     this.setState({
//       city: this.props.city,
//       heartIsClicked: false,
//     })
//   }
//   console.log(this.state.city)
// }

handleLike = () => {
  this.setState({
    heartIsClicked:!this.state.heartIsClicked
  })
  console.log(this.state.heartIsClicked)
}

 addFav = () => {
   const { favouritesArr, city } = this.state   
   favouritesArr.push(city)
   this.props.favouritesArr(favouritesArr)
 }


render(){

const { city } = this.state;


  return(
        
   <>    
            
      {/* <div className="relative mt-6 mx-auto w-1/3 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" style={{ backgroundImage: city.weather[0].main === "Clouds" ? `url(${BG_clouds})` : city.weather[0].main === "Drizzle" ? `url(${BG_rain})` : city.weather[0].main === "Rain" ? `url(${BG_rain})`: city.weather[0].main === "Snow" ? `url(${BG_snow})` : city.weather[0].main === "Clear" ? `url(${BG_sunny})` : `url(${BG_storm})` }}> */}
   <div className="relative mt-6 mx-auto w-1/3 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" >
      <div>
        <h5 className="text-3xl">{city.data.name}, {city.data.sys.country}</h5>
      </div>           
      
      <div className="p-4">  
     < LogoSwitch  weather= {city.data.weather[0].main } />            
        <h5 className="text-xs">{city.data.weather[0].description}</h5>
      </div>

      <div className="flex flex-col"> 
      <div className="flex"><img className="w-8 items-center " src="../image/heat.png" alt="termometro logo"></img>  <h5 className="text-3xl">{this.kelvinToCelsius(city.data.main.temp)}º  </h5>
       <h5 className="text-lg ml-2"> Feels like {this.kelvinToCelsius(city.data.main.feels_like)}º</h5></div> 
      </div>

   
      <div className="flex mt-3">
        <img className="w-8 items-center " src="../image/wind.png" alt="termometro logo"></img> <h5><strong>Wind Speed: {city.data.wind.speed}</strong></h5> 
      </div>

      <div className="flex items-center mt-3">
        <img className="w-8 items-center " src="../image/humidity.png" alt="termometro logo"></img><h5><strong>Humidity: {city.data.main.humidity}</strong></h5>
      </div> 


      {!this.state.heartIsClicked ? (
        <div>
          <img className="w-10 absolute right-10 bottom-4" src="./image/heart.png" alt="hear icon" onClick={() => {this.handleLike(); this.addFav()}} /> 
                   
        </div>
          
      ) :(
        <div>
        <img className="w-10 absolute right-10 bottom-4" src="./image/red-heart.png" alt="hear icon" onClick={() => {this.handleLike(); this.addFav()}} />            
      </div>
      )} 
                           
      </div>
  </>
 )
 }; 

};
  
export default CurrentWeather;