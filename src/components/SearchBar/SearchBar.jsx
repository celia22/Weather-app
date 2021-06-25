import React, {Component } from "react"
import axios from 'axios';
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast"
import BG_main from "./BG_main.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon  icon={faSearch} />

require('dotenv').config();

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
        city: "",
        background: true,
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
          background: false,
        })
        console.log("city", this.state.city)
    })
    
    .catch((error) => {
        console.log('error', error)
    })
  }
  
  handleChange = (x) => {
    this.setState({ query: x.target.value });  
  }

  render(){
    const { city, forecast, background } = this.state;

    return(
      <>
      <div className="h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
        <h1 className="text-white text-2xl p-3 "> Your Weather App</h1>
        </div> 
      <div className="w-screen h-screen" style={{ backgroundImage: background ? `url(${BG_main})` : null }}> 
    
        <input className="h-10  w-80  bg-white absolute top-2 right-44" type="text" label="text" name="value" placeholder="Search a new location" value={this.state.query} onChange={this.handleChange}/> 
        <button className="absolute top-4 right-48 z-50" onClick={this.handleQuery}>{element}</button>
        {city ? <CurrentWeather city={city} /> : ""}   
        {forecast ? <Forecast forecast={forecast} /> : ""}  

      </div>  

    </>
    )
  }
}

export default SearchBar



