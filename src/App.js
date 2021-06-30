import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Home from "./components/Home/Home";
import Favourites from "./components/Favourites/Favourites";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      forecast: "",
      main: true,
      favouritesArr: "",
    };
  }

  handleCity = (city) => {
    this.setState({
      city: city,
    });
  };

  handleForecast = (forecast) => {
    this.setState({
      forecast: forecast,
    });
  };

  handleFavs = (favouritesArr) => {
    this.setState({
      favouritesArr: favouritesArr,
    });
    console.log("APPJS", favouritesArr);
  };

  render() {
    const { city, forecast, favouritesArr } = this.state;
    return (
      <div className="h-screen bg-blue-50">
        <Router>
          <Switch>
            <Route path="/favourites">
              <Favourites add={favouritesArr} />
            </Route>

            <Route path="/search">
              <SearchBar
                city={this.handleCity}
                forecast={this.handleForecast}
              />
              {city ? (
                <CurrentWeather city={city} favouritesArr={this.handleFavs} />
              ) : (
                ""
              )}
              {forecast ? <Forecast forecast={forecast} /> : ""}
            </Route>

            <Route path="/">
              <SearchBar
                city={this.handleCity}
                forecast={this.handleForecast}
              />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
