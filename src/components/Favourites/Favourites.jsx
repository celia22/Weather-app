import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


class Favourites extends Component{
  constructor(props){
    super(props)
    this.state = {
      favouritesArr: this.props.add,
      render: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      render: true
    })
  }

  render(){

    console.log("favArr", this.state.favouritesArr)
    const { favouritesArr } = this.state;
    return(
      
      <div>
        <h1>testing</h1> 
        
     
       {favouritesArr.map((item, index) => {
          return(
            <div key={index}>
              <p>{this.handleFavState}</p>
              <p>{item.weather[0].description}</p>
            </div>
          )
        })} 

      </div>

    )
  }
}

export default Favourites