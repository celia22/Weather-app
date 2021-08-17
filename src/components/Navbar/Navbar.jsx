import React, {Component} from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render(){
    return(
      
      <div className="h-14 bg-gradient-to-r from-blue-400 via-blue-900 to-black">
          <h1 className="text-white text-2xl p-3 "> Your Weather App</h1>
          <Link to="/favourites" ><h3 className="text-white text-xl p-3 right-36"> Favourites </h3>  </Link>     
      </div> 
    )
  }
}

export default Navbar;