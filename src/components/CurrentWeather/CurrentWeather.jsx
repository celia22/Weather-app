import React, { Component } from 'react';
import {kelvinToCelsius} from '../../helpers/index';
import IconSwitch from '../IconSwitch/IconSwitch';
import './CurrentWeather.css';

class CurrentWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heartIsClicked: false,
			favouritesArr: [],
      city: props.city,
		};
	}

	handleLike = () => {
    const { city } = this.state;
		this.setState({
			heartIsClicked: !this.state.heartIsClicked,
		});
    this.props.add(city)
	};

  componentDidUpdate(prevProps){
    if (prevProps.city !== this.props.city){ 
      this.setState({
        city: this.props.city,
        heartIsClicked: false,
      })
    }
  }


	render() {
		const { city } = this.state;

		return (
			<>
				<div className='current_weather_container'>
					<div className='current_weather_header'>
						<div className='current_weather_header_city'>
							<h5>{city.data.name} </h5>
						</div>

						<div className='current_weather_header_temp'>
							<h3 className='text-3xl'>{kelvinToCelsius(city.data.main.temp)}º </h3> &nbsp; &nbsp;
							<span>
								<h6> Feels like {kelvinToCelsius(city.data.main.feels_like)}º</h6>
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
									// this.addFav();
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
									// this.addFav();
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
