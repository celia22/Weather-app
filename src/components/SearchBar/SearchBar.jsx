import React, {Component } from "react"
import axios from 'axios';
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast"
require('dotenv').config();

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
        city: "",
        forecast: "",
        status: "loading",
        query: "",

    }
  }

  handleQuery = () => {
    const { query } = this.state 
       axios.defaults.baseURL = 'http://api.openweathermap.org';  
    axios.get(`/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
        this.setState({
          forecast: response.data,
        })        
    })
    axios.defaults.baseURL = 'http://api.openweathermap.org';  
    axios.get(`/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
        this.setState({
          city: response.data,
        })
    })
    
    .catch((error) => {
        console.log('error', error)
    })
  }
  
  handleChange = (x) => {
    this.setState({ query: x.target.value });  
  }

  render(){
    const { city, forecast } = this.state;

    return(
      <>
      <div className="h-14 bg-gradient-to-r from-blue-600 via-blue-900 to-black">
        <h1 className="text-white"> Your Weather App</h1>
        </div> 
      <div className="flex items-center"> 
        <img className="w-screen h-/6" src="../image/BG_main.png" alt="bgimage"></img>
        <input className="h-10  w-3/5  bg-white absolute top-56 left-72 z-40" type="text" label="text" name="value" placeholder="Search a new location" value={this.state.query} onChange={this.handleChange}/> 
        <button className="absolute top-60 right-72 z-50" onClick={this.handleQuery}>Submit</button>
      </div>  
     
      {/* absolute top-0 left-72 */}
          
      
      {city ? <CurrentWeather city={city} /> : <p></p>}   
      {forecast ? <Forecast forecast={forecast} /> : <p></p>}        
      
    </>
    )
  }
}

export default SearchBar



