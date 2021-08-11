import React, {Component} from "react";
import SearchBar from "../SearchBar/SearchBar";

class Navbar extends Component {
  render(){
    return(
      
      <div className="h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <h1 className="text-white text-2xl p-3 "> Your Weather App</h1>
         < SearchBar />       
      </div> 
    )
  }
}

export default Navbar;