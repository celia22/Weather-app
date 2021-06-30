const LogoSwitch = (props) => {

 const weather = props.weather  

 let src = " "

 
  switch(weather){
    case "Thunderstorm":
      src= "../image/storm.png"
      break;
    case "Drizzle":
      src= "../image/rainy.png"
      break; 
    case "Rain":
      src= "../image/rainy.png"
      break;
    case "Snow":
      src= "../image/snow.png"
      break;
    case "Clear":
      src= "../image/sun.png"
      break;
    case "Clouds":
      src= "../image/clouds.png"
      break;
    default:
      src=" "                   
  }
  
  return (
    <img className="w-8" src= {src} alt="logo" />
  )  
    
}

export default LogoSwitch;