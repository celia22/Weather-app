import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="Weather_app">
      <Router>
        <Route path="/" component={SearchBar} />
      </Router>
      <Router>
        <Route path="/search" component={SearchBar} />
      </Router>
    </div>
  );
}

export default App;

/* <Router>
<Switch>
  <Route exact path="/beers/:id" component={SingleBeer} />
  <Route path="/random-beer" component={RandomBeer} />
  <Route path="/new-beer" component={NewBeer} />
  <Route path="/beers">
    <AllBeers search={this.searchBeerQuery} />
  </Route>
  <Route path="/" component={HomePage} />
</Switch>
</Router> */
