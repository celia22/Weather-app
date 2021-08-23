import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import React, {Component} from "react";
import apiService from "../services/apiClient";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Forecast from "../components/Forecast/Forecast";
import clear from "./pics/clear.jpg"
import clouds from "./pics/clouds.jpg"
import rain from "./pics/rain.jpg"
import storm from "./pics/storm.jpg"
import fog from "./pics/fog.jpg"
import snow from "./pics/snow.jpg"


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
   
    // console.log("weather location", location.data.weather[0].main)
    return(
      
   
      <div>
      {/* <div className="home_page_container" style={{ backgroundImage: location.data.weather[0].main === "Clouds" ? `url(${clouds})` : location.data.weather[0].main === "Drizzle" ? `url(${rain})` : location.data.weather[0].main === "Rain" ? `url(${rain})`: location.data.weather[0].main === "Snow" ? `url(${snow})` : location.data.weather[0].main === "Clear" ? `url(${clear})` : `url(${storm})` }}> */}
      <div className="navbar_container" > 
      < Navbar /> 
      < SearchBar newLocation={this.newSearch} initialValue={initialCity}/>  
      </div>
      <div>

      { status === "loaded" ? (
        <div className="home_page_container" style={{ backgroundImage: location.data.weather[0].main === "Clouds" ? `url(${clouds})` : location.data.weather[0].main === "Drizzle" ? `url(${rain})` : location.data.weather[0].main === "Rain" ? `url(${rain})`: location.data.weather[0].main === "Snow" ? `url(${snow})` : location.data.weather[0].main === "Clear" ? `url(${clear})` : `url(${storm})` }}> 
            { status === 'loading' && <p ><span className="rotate">⏳</span>Loading data...</p>}
      { status === "loaded" && <CurrentWeather city={location} /> }
      { status === "loaded" && console.log("weather", location.data.weather[0].main)}
      { status === "loaded" && <Forecast forecast={forecast}/>}
        </div>
      ): (
          " "
      )}      
      </div>   
     </div>

    )
  }

}

export default Home;