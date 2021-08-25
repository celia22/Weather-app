import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apiService from '../services/apiClient';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Forecast from '../components/Forecast/Forecast';
import './styles/home.css';
import clear from './pics/clear.jpg';
import clouds from './pics/clouds.jpg';
import rain from './pics/rain.jpg';
import storm from './pics/storm.jpg';
import fog from "./pics/fog.jpg"
import snow from './pics/snow.jpg';

require('dotenv').config();
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialCity: 'Barcelona',
			location: ' ',
			forecast: ' ',
			status: 'loading',
			favouritesArr: [],
		};
	}

	componentDidMount = () => {
		const { initialCity } = this.state;
		this.weatherRequest(initialCity);
		this.setState({
			location: initialCity,
		});
	};

	async weatherRequest(location) {
		this.setState({
			status: 'loading',
		});
		try {
			const city = await apiService.cityRequest(location);
			const forecast = await apiService.weatherRequest(location);
			this.setState({
				location: city,
				forecast: forecast,
				status: 'loaded',
			});
		} catch (e) {
			console.log(e);
		}
	}

	newSearch = location => {
		this.weatherRequest(location);
	};

	handleFavs = (favouritesArr) => {
    this.setState({
      favouritesArr: favouritesArr,
    });
    console.log("APPJS", favouritesArr);
  };

	render() {
		console.log(this.state.location);
		const { initialCity, location, status, forecast, favouritesArr } = this.state;

		return (
			<div className="home_page_container">
				<div className="navbar_container">
					<Navbar />
					<Link to="/favourites" favs={favouritesArr}><h3 > Favourites </h3>  </Link>   					
					<SearchBar newLocation={this.newSearch} initialValue={initialCity} />
				</div>
				<div>
					{status === 'loaded' ? (
						<div
							className="home_weather_container"
							style={{
								backgroundImage:
									location.data.weather[0].main === 'Clouds'
										? `url(${clouds})`
										: location.data.weather[0].main === 'Drizzle'
										? `url(${rain})`
										: location.data.weather[0].main === 'Rain'
										? `url(${rain})`
										: location.data.weather[0].main === 'Snow'
										? `url(${snow})`
										: location.data.weather[0].main === 'Mist'
										? `url(${fog})`
										: location.data.weather[0].main === 'Clear'
										? `url(${clear})`
										: `url(${storm})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
						>
							{status === 'loading' && (
								<p>
									<span>⏳</span>Loading weather...
								</p>
							)}
							{status === 'loaded' && <CurrentWeather city={location} add={this.handleFavs}/>}
							{status === 'loaded' && <Forecast forecast={forecast} />}
						</div>
					) : (
						' '
					)}
				</div>
			</div>
		);
	}
}

export default Home;
