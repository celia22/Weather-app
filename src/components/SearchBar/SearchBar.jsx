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
        console.log(this.state.forecast)
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
    // this.props.search(x.target.value)
  }

  render(){
    const { city, forecast } = this.state;
    //console.log("searhcb", city)
    return(
      <>
      <div className="h-12 flex bg-blue-600">
        <h1 className="text-white"> Your Weather App</h1>
        <input className="h-8 rounded-md" type="text" label="text" name="value" placeholder="Search a new location" value={this.state.query} onChange={this.handleChange}/> 
        <button onClick={this.handleQuery}>Submit</button>
        
      </div>     
      
      {city ? <CurrentWeather city={city} /> : <p></p>}   
      {forecast ? <Forecast forecast={forecast} /> : <p></p>}        
      
    </>
    )
  }
}

export default SearchBar