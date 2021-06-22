import React, {Component } from "react"

import LogoSwitch from "../LogoSwitch/LogoSwitch"

let src;

class CurrentWeather extends Component {
constructor(props){
  super(props)
  this.state={
    city: props.city,
    
  }
}
/* <LogoSwitch weather={this.state.city.weather[0].main} />  */

 timeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);

  var hour = a.getHours();
  var min = a.getMinutes();

  var time = ' ' + hour + ':' + min ;
  return time;
}

kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273 
  return celsius.toFixed(0)
}

handleLogo = (src) => {
  < LogoSwitch weather= {this.state.city.weather[0].main } />
  
 }

  render(){
    const { city } = this.state
    // console.log("city", city)
    // console.log("src", src)


    return(
      <div className="m-24 w-64 h-64 rounded-md bg-gray-300">
        <h1>Current Weather</h1>
        <div>
          <h5>{city.name}</h5>
          <h5>{city.sys.country}</h5>   
        </div>           
        
        <div>       
        
        <img src={this.handleLogo()} alt="weather logo" />          
          <h5>{city.weather[0].main}</h5>
        </div>

        <div className="flex"> 
         <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img>  <h5>Max temp: {this.kelvinToCelsius(city.main.temp_max)}º</h5>
        </div>

        <div className="flex">
        <img className="w-8 items-center" src="../image/termometro.png" alt="termometro logo"></img><h5>Min temp: {this.kelvinToCelsius(city.main.temp_min)}º</h5>
        </div>       
        
        <div className="flex">
          <img className="w-8 items-center" src="../image/sunrise.png" alt="sunrise logo"></img> <h5>Sunrise time: {this.timeConverter(city.sys.sunrise)}</h5> 
        </div>

        <div className="flex items-center">
          <img className="w-8" src="../image/sunset.png" alt="sunrise logo"></img><h5>Sunset time: {this.timeConverter(city.sys.sunset)}</h5>
        </div>        
      </div>
    )
  }

}

export default CurrentWeather