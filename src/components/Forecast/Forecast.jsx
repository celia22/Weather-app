import React, {Component } from "react"


class Forecast extends Component {
constructor(props){
  super(props)
  this.state={
    city: props.city,
  }
}
  
  render(){
    const { city } = this.state
    console.log("city", city)

    return(
      <div>
        <h1>Forecast</h1>
        <h5>{city.name}</h5>
        <h5>{city.country}</h5> 
        <h5>{city.weather[0].description}</h5> 
        <h5>{city.weather[0].icon}</h5> 
        <h5>{city.main.temp_max}</h5>
        <h5>{city.main.temp_min}</h5>
        <h5>{city.sys.sunrise}</h5>
        <h5>{city.sys.sunset}</h5>
      </div>
    )
  }

}

export default Forecast