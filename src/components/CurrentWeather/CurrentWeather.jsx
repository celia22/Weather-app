import React, { Component } from 'react';

import IconSwitch from '../IconSwitch/IconSwitch';
import './CurrentWeather.css';

class CurrentWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heartIsClicked: false,
			favouritesArr: [],
		};
	}

	kelvinToCelsius = kelvin => {
		const celsius = kelvin - 273;
		return celsius.toFixed(0);
	};

	handleLike = () => {
		this.setState({
			heartIsClicked: !this.state.heartIsClicked,
		});
	};

	addFav = () => {
		const { favouritesArr } = this.state;
		const city = this.props;
		favouritesArr.push(city);
		console.log("fav", favouritesArr)
		this.props.addFav(favouritesArr);
	};

	render() {
		const { city } = this.props;

		return (
			<>
				<div className='current_weather_container'>
					<div className='current_weather_header'>
						<div className='current_weather_header_city'>
							<h5>{city.data.name} </h5>
						</div>

						<div className='current_weather_header_temp'>
							<h3 className='text-3xl'>{this.kelvinToCelsius(city.data.main.temp)}º </h3> &nbsp; &nbsp;
							<span>
								<h6> Feels like {this.kelvinToCelsius(city.data.main.feels_like)}º</h6>
							</span>
						</div>
						<div className='current_weather_icon_switch'>
							<IconSwitch weather={city.data.weather[0].main} /> &nbsp; &nbsp;
							<h6>{city.data.weather[0].main}</h6>
						</div>
					</div>

					{/* <div className='current_weather_info'>
						<img className='current_weather_icon' src='../image/wind.png' alt='termometro logo'></img>&nbsp;
						<h5>{city.data.wind.speed}</h5>
						&nbsp;&nbsp;
						<img className='current_weather_icon' src='../image/humidity.png' alt='termometro logo'></img> &nbsp;
						<h5>{city.data.main.humidity} %</h5>
					</div> */}

					{!this.state.heartIsClicked ? (
						<div>
							<img
								className='heart_icon'
								src='./image/heart.png'
								alt='hear icon'
								onClick={() => {
									this.handleLike();
									this.addFav();
								}}
							/>
						</div>
					) : (
						<div>
							<img
								className='heart_icon'
								src='./image/red-heart.png'
								alt='hear icon'
								onClick={() => {
									this.handleLike();
									this.addFav();
								}}
							/>
						</div>
					)}
				</div>
			</>
		);
	}
}

export default CurrentWeather;
