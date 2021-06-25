const LogoSwitch = (props) => {

  const weather = props.weather  

 let src = " "

 
  switch(weather){
    case "Thunderstorm":
      src= "../image/rain_thunder.png"
      break;
    case "Drizzle":
      src= "../image/rain.png"
      break; 
    case "Rain":
      src= "../image/rain.png"
      break;
    case "Snow":
      src= "../image/snow.png"
      break;
    case "Clear":
      src= "../image/day_clear.png"
      break;
    case "Clouds":
      src= "../image/cloudy.png"
      break;
    default:
      src=" "                   
  }

  console.log(weather)
  console.log("src",src)
  
  return (
    <img className="w-8" src= {src} alt="logo" />
  )  
    
}

export default LogoSwitch;