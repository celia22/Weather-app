import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBar.css";

const element = <FontAwesomeIcon  icon={faSearch} />

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: this.props.initialValue
    }
  }

	handleChange = x => {
    const newCity = x.target.value
		this.setState({ city: newCity });
    console.log("city request in search", newCity)
	};


  handleNewCity = () => {
    const { city } = this.state;
    this.props.newLocation(city);
}


  render(){
    const { city } = this.state;  
    return(
      <>
      <div className="searchbar_container">           
      <input 
       type="text"
       label="text" 
       name="value"
       placeholder="Search a new location"
       value={city}
       onChange={this.handleChange}
       /> 
      <button 
      type="submit" 
      onClick={this.handleNewCity}> 
      {element}
      </button>
    </div>  

 </>
    ) 
  }
}

export default SearchBar;



