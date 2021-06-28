import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon  icon={faSearch} />

require('dotenv').config();

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
        city: "",
        forecast: "",
        main: true,
        query: "",

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
  
  handleChange = (x) => {
    this.setState({ query: x.target.value });  
  }

  render(){
    
    return(
      <>     
       {this.state.main ? (
         <div className="h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <Link to="/" ><h1 className="text-white text-2xl p-3 "> Your Weather App</h1>  </Link>   
          <input className="h-16  w-2/4  bg-white relative top-52 left-1/4" type="text" label="text" name="value" placeholder="Search a new location" value={this.state.query} onChange={this.handleChange}/> 
          <Link to="/search" className="absolute top-72 left-2/3  z-50" onClick={this.handleQuery}>{element}</Link>     
         </div>   
       ) : (
        <div className="flex h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <Link to="/" ><h1 className="text-white text-2xl p-3 "> Your Weather App</h1>  </Link> 
          <Link to="/favourites" ><h3 className="text-white text-xl p-3 right-36"> Favourites </h3>  </Link>          
          <input className="h-10  w-80  bg-white absolute top-2 right-44" type="text" label="text" name="value" placeholder="Search a new location" value={this.state.query} onChange={this.handleChange}/> 
          <Link to="/search" className="absolute top-4 right-48 z-50" onClick={this.handleQuery}>{element}</Link>     
        </div>  
       )
      }
   </>
    ) 
  }
}

export default SearchBar



