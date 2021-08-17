import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import React, {Component} from "react";
import apiService from "../services/apiClient";
import CurrentWeather from "./CurrentWeather";

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
}


  weatherRequest = async (location) => {
    try {
     const city =  await apiService.cityRequest(location)
     const forecast = await apiService.weatherRequest(location)   
      console.log("searcB CITY", city)
      console.log("searcB FORECAST", forecast)
      this.setState({
        location: city,
        forecast: forecast
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
    const { initialCity, location } = this.state;
    return(
      <div className="w-screen h-screen" > 
      < Navbar /> 
      < SearchBar newLocation={this.newSearch} initialValue={initialCity}/>  
     <img src='../image/BG_main.jpeg' alt="mountain background" />
     < CurrentWeather city={location}/>
      
      </div>
    )
  }

}

export default Home;