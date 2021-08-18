import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component {
  render(){
    return(
      
      <div className="navbar_container">
          <h1> Your Weather App</h1>
          <Link to="/favourites" ><h3 > Favourites </h3>  </Link>     
      </div> 
    )
  }
};


export default Navbar;