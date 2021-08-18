import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import React, {Component} from "react";
import apiService from "../services/apiClient";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Forecast from "../components/Forecast/Forecast"

require('dotenv').config();
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialCity: "Barcelona",
      location: " ",
      forecast: " ",
      status: "loading",
      favouritesArr: [],
      heartIsClicked: false
    }
  }

  componentDidMount = () => {
    const { initialCity } = this.state;
    this.weatherRequest(initialCity) 
    this.setState({
      location:initialCity,
    })
}


  async weatherRequest(location){
    this.setState({
      status: 'loading'
    })
    try {
     const city =  await apiService.cityRequest(location)
     const forecast = await apiService.weatherRequest(location)   
      console.log("searcB CITY", city)
      console.log("searcB FORECAST", forecast)
      this.setState({
        location: city,
        forecast: forecast,
        status: "loaded"
      })
    } catch (e){
      console.log(e)
    } 
  };

  newSearch = (location) => {
    this.weatherRequest(location) 
  }


  render(){
    console.log(this.state.location)
    const { initialCity, location, status, forecast } = this.state;
    return(
      <div className="w-screen h-screen" > 
      < Navbar /> 
      < SearchBar newLocation={this.newSearch} initialValue={initialCity}/>  

      { status === 'loading' && <p className="text-lg mb-4 font-normal mt-8"><span className="rotate">⏳</span>Loading data...</p>}
      { status === "loaded" && <CurrentWeather city={location} /> }
      { status === "loaded" && <Forecast forecast={forecast}/>}
          
      </div>

      
    )
  }

}

export default Home;