import React, {Component} from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiClient";

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
        query: " ",
    }
  }

	handleChange = x => {
		this.setState({ query: x.target.value });
    console.log("query", this.state.query)
	};

  weatherRequest = async () => {
    const query = this.state.query
    console.log("query", query)
    try {
    const city = await apiService.cityRequest(query)
    const forecast = await apiService.weatherRequest(query)
      this.setState({ 
        city, 
        forecast 
      });  
    } catch (e){
      console.log(e)
    }    
  };

  // componentDidUpdate(prevProps, main){
  //   if (prevProps.city !== this.props.city){ 
  //     this.setState({
  //       city: this.props.city,
  //       main: false,
  //     })
  //   }
  // }

  render(){
    const { query } = this.state.query;
    console.log("render", this.state.query)
    return(

      <>     
       {this.state.main ? (
         <div className="h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <Link to="/" ><h1 className="text-white text-2xl p-3 "> Your Weather App</h1>  </Link>   
          <input className="h-16  w-2/4  bg-white relative top-52 left-1/4" type="text" label="text" name="value" placeholder="Search a new location" value={query} onChange={this.handleChange}/> 
          <Link to="/search" className="absolute top-72 left-2/3  z-50" onClick={this.weatherRequest}>{element}</Link>     
         </div>   
       ) : (
        <div className="flex h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <Link to="/" ><h1 className="text-white text-2xl p-3 "> Your Weather App</h1>  </Link> 
          <Link to="/favourites" ><h3 className="text-white text-xl p-3 right-36"> Favourites </h3>  </Link>          
          <input className="h-10  w-80  bg-white absolute top-2 right-44" type="text" label="text" name="value" placeholder="Search a new location" value={query} onChange={this.handleChange}/> 
          <Link to="/search" className="absolute top-4 right-48 z-50" onClick={this.weatherRequest}>{element}</Link>     
        </div>  
       )
      }
   </>
    ) 
  }
}

export default SearchBar



