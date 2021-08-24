import React, { Component } from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"
import "./CurrentWeather.css"

class CurrentWeather extends Component {
  constructor(props){
    super(props)
    this.state = {
      heartIsClicked: false
    }
  }


kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273 
  return celsius.toFixed(0)
}


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

const { city } = this.props;

  return(        
   <>    
      <div className="current_weather_container">
       <div className="current_weather_header"> 
        <h5>{city.data.name}, {city.data.sys.country}</h5> 
       < LogoSwitch weather= {city.data.weather[0].main } />            
          <h5>{city.data.weather[0].main}</h5>
          <div className="current_weather_header_temp">
          <img className="current_weather_icon" src="../image/heat.png" alt="termometro logo"></img>  <h5 className="text-3xl">{this.kelvinToCelsius(city.data.main.temp)}º  </h5> <h6> Feels like {this.kelvinToCelsius(city.data.main.feels_like)}º</h6>
          </div>        
         
        </div>
  
        <div className="current_weather_info"> 
        
         <img className="current_weather_icon" src="../image/wind.png" alt="termometro logo"></img> <h5><strong>Wind Speed: {city.data.wind.speed}</strong></h5> 
         <img className="current_weather_icon" src="../image/humidity.png" alt="termometro logo"></img><h5><strong>Humidity: {city.data.main.humidity} %</strong></h5>
    </div> 
  
        {!this.state.heartIsClicked ? (
          <div>
            <img className="current_weather_icon" src="./image/heart.png" alt="hear icon" onClick={() => {this.handleLike(); this.addFav()}} /> 
                     
          </div>
            
        ) :(
          <div>
          <img  className="current_weather_icon" src="./image/red-heart.png" alt="hear icon" onClick={() => {this.handleLike(); this.addFav()}} />            
        </div>
        )} 
                             
        </div>
      
    </>         
     
  
 )
 }; 

};
  
export default CurrentWeather;

{/* <div className="relative mt-6 mx-auto w-1/3 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" style={{ backgroundImage: city.weather[0].main === "Clouds" ? `url(${BG_clouds})` : city.weather[0].main === "Drizzle" ? `url(${BG_rain})` : city.weather[0].main === "Rain" ? `url(${BG_rain})`: city.weather[0].main === "Snow" ? `url(${BG_snow})` : city.weather[0].main === "Clear" ? `url(${BG_sunny})` : `url(${BG_storm})` }}> */}