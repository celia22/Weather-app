import React, {Component} from "react";
import IconSwitch from "../components/IconSwitch/IconSwitch"


class Favourites extends Component{
  constructor(props){
    super(props)
    this.state = {
      favouritesArr: this.props.favs,
      heartIsClicked: true,
    }
  }

  toCelsius = (k) => {
    const celsius = k - 273
    return celsius.toFixed(0)
  }


handleLike = (index) => { // esta repetida, habria que pasarla a services aqui y en currentWeather
  this.setState({
    heartIsClicked:!this.state.heartIsClicked
  })
  console.log(this.state.heartIsClicked)
}

 addFav = () => {
   const { favouritesArr, city } = this.state   
   favouritesArr.push(city)
   this.props.favouritesArr(favouritesArr)
 }

removeFav = () => {

}


  render(){

    console.log("favArr", this.state.favouritesArr)
    const { favouritesArr } = this.state;
    return(    
     <>
    {/* <SearchBar /> */}

    {favouritesArr ? (
      <>
        <h1>Your favourites cities</h1>

<div className="flex flex-wrap">

   {favouritesArr.map((item, index) => {
     return(
      // <div key={index} className=" relative mt-6 mx-16 w-1/4 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" style={{ backgroundImage: item.weather[0].main === "Clouds" ? `url(${BG_clouds})` : item.weather[0].main === "Drizzle" ? `url(${BG_rain})` : item.weather[0].main === "Rain" ? `url(${BG_rain})`: item.weather[0].main === "Snow" ? `url(${BG_snow})` : item.weather[0].main === "Clear" ? `url(${BG_sunny})` : `url(${BG_storm})` }} >
      <div key={index} className=" relative mt-6 mx-16 w-1/4 h-72 p-6 rounded-md shadow-lg border-2 border-gray-600" >
      <h5 className="text-3xl">{item.name}, {item.sys.country}</h5>
         < IconSwitch weather= {item.weather[0].main } />   
          <p>{item.weather[0].description}</p>
      <div className="flex flex-col"> 
        <div className="flex"><img className="w-8 items-center " src="../image/heat.png" alt="termometro logo"></img>  <h5 className="text-3xl">{this.toCelsius(item.main.temp)}º  </h5>
        <h5 className="text-lg ml-2"> Feels like {this.toCelsius(item.main.feels_like)}º</h5>
        </div> 
    </div>    
    
    <div className="flex mt-3">
      <img className="w-8 items-center " src="../image/wind.png" alt="termometro logo"></img> <h5><strong>Wind Speed: {item.wind.speed}</strong></h5> 
    </div>

    <div className="flex items-center mt-3">
      <img className="w-8 items-center " src="../image/humidity.png" alt="termometro logo"></img><h5><strong>Humidity: {item.main.humidity}</strong></h5>
    </div> 


    {!this.state.heartIsClicked ? (
      <div>
        <img className="w-10 absolute right-10 bottom-4" src="./image/heart.png" alt="hear icon" onClick={() => {this.handleLike(index); this.removeFav(index)}} /> 
                 
      </div>
        
    ) :(
      <div>
      <img className="w-10 absolute right-10 bottom-4" src="./image/red-heart.png" alt="hear icon" onClick={() => {this.handleLike(index); this.removeFav(index)}} />            
    </div>
    )}     
      
      </div>
     )

    })} 
</div>
      </>
    ) : (
      <h2>Still no favourite cities</h2>
    )}

   
     </> 

    )
  }
}

export default Favourites