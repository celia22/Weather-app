import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

class App extends Component {
  render() {
    return (
      <div className="h-screen bg-blue-50">
        <Router>
          <Switch>
            <Route path="/favourites" component={Favourites} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
