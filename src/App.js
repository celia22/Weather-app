import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Home from "./components/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      forecast: "",
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

  render() {
    const { city, forecast } = this.state;
    return (
      <div className="Weather_app">
        <Router>
          <Switch>
            <Route path="/search">
              <SearchBar
                city={this.handleCity}
                forecast={this.handleForecast}
              />
              {city ? <CurrentWeather city={city} /> : ""}
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
