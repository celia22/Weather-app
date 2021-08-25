import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconSwitch from '../components/IconSwitch/IconSwitch';
import { kelvinToCelsius } from '../helpers/index';
import './styles/Favourites.css';

class Favourites extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favouritesArr: this.props.favArr,
			heartIsClicked: true,
		};
	}

	handleLike = index => {
		// esta repetida, habria que pasarla a services aqui y en currentWeather
		this.setState({
			heartIsClicked: !this.state.heartIsClicked,
		});
		console.log(this.state.heartIsClicked);
	};

	addFav = () => {
		const { favouritesArr, city } = this.state;
		favouritesArr.push(city);
		this.props.favouritesArr(favouritesArr);
	};

	removeFav = () => {};

	render() {
		console.log('favArr', this.state);
		const { favouritesArr } = this.state;
		return (
			<>
				{favouritesArr ? (
					<>
						<button>
							<Link to="/">Back</Link>
						</button>
						<h1>Your favourites cities</h1>

						<div className="favPage">
							{favouritesArr.map((item, index) => {
								return (
			
										<div className="current_weather_container" key={index}>
											<div className="current_weather_header">
												<div className="current_weather_header_city">
													<h5>{item.data.name} </h5>
												</div>

												<div className="current_weather_header_temp">
													<h3 className="text-3xl">{kelvinToCelsius(item.data.main.temp)}º </h3> &nbsp; &nbsp;
													<span>
														<h6> Feels like {kelvinToCelsius(item.data.main.feels_like)}º</h6>
													</span>
												</div>
												<div className="current_weather_icon_switch">
													<IconSwitch weather={item.data.weather[0].main} /> &nbsp; &nbsp;
													<h6>{item.data.weather[0].main}</h6>
												</div>
											</div>

											{!this.state.heartIsClicked ? (
												<div>
													<img
														className='heart_icon'
														src="./image/heart.png"
														alt="hear icon"
														onClick={() => {
															this.handleLike(index);
															this.removeFav(index);
														}}
													/>
												</div>
											) : (
												<div>
													<img
														className='heart_icon'
														src="./image/red-heart.png"
														alt="hear icon"
														onClick={() => {
															this.handleLike(index);
															this.removeFav(index);
														}}
													/>
												</div>
											)}
										</div>
				
								);
							})}
						</div>
					</>
				) : (
					<h2>Still no favourite cities</h2>
				)}
			</>
		);
	}
}

export default Favourites;
