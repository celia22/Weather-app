import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      forecast: "",
    };
  }

  render() {
    return (
      <div className="Weather_app">
        <Router>
          <Route path="/" component={SearchBar} />

          <Route path="/search">
            <CurrentWeather />
            <Forecast />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
