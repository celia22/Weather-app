import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Favourites extends Component{
  constructor(props){
    super(props)
    this.state = {
      favArray: this.props.favArray,
    }
  }

  handleQuery = () => {
    const { query } = this.state 
    axios.defaults.baseURL = 'http://api.openweathermap.org';  
    axios.get(`/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => { 
        this.props.forecast(response.data);  
    })
    axios.defaults.baseURL = 'http://api.openweathermap.org';  
    axios.get(`/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
        this.props.city(response.data);
        this.setState({
          main: false,
        })
    })
    
    .catch((error) => {
        console.log('error', error)
    })
  }
  
  render(){
    console.log("favArr", this.state.favArray)
    return(
      
      <div>
        <h1>testing</h1> 
        <p>FavArray {this.state.favArray}</p>
      </div>

    )
  }
}

export default Favourites