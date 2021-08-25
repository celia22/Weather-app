import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import NotFound from './pages/NotFound';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favouritesArr: [],
		};
	}

	handleFavs = favouritesArr => {
		this.setState({
			favouritesArr: favouritesArr,
		});
		console.log('favs in app.js', favouritesArr);
	};

	render() {
		const { favouritesArr } = this.state;
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/notfound" component={NotFound} />
						<Route path="/favourites" render={() => <Favourites favArr={favouritesArr} />} />
						<Route path="/" render={() => <Home add={this.handleFavs} />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
