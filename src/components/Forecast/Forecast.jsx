import React from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import { getWeekDay } from '../../helpers/index';
import './Forecast.css';

const Forecast = props => {
	const forecast = props.forecast;

	const toCelsius = k => {
		const celsius = k - 273;
		return celsius.toFixed(0);
	};

	const fiveDayForecast = [];
	let temp = [];

	for (let i = 0; i < forecast.data.list.length; i++) {
		if (i % 7 === 0 && i !== 0) {
			temp.push(forecast.data.list[i]);
			fiveDayForecast.push(temp);
			temp = [];
		}
		temp.push(forecast.data.list[i]);
	}

	const minTempForecast = [];
	const maxTempForecast = [];

	for (let i = 0; i < fiveDayForecast.length; i++) {
		let tempMin = 700;
		let tempMax = 0;
		for (let j = 0; j < fiveDayForecast[i].length; j++) {
			if (fiveDayForecast[i][j].main.temp_min < tempMin) {
				tempMin = fiveDayForecast[i][j].main.temp_min;
			}
			if (fiveDayForecast[i][j].main.temp_max > tempMax) {
				tempMax = fiveDayForecast[i][j].main.temp_max;
			}
		}
		minTempForecast.push(tempMin);
		maxTempForecast.push(tempMax);
		tempMin = 700;
		tempMax = 0;
	}

	console.log('forecast', fiveDayForecast);

	return (
		<>
			<div className="forecast_card_container">
				<div className="forecast_card_title">
					<img className="w-8 items-center" src="../image/calendar.png" alt="calendar icon" /> &nbsp; &nbsp;{' '}
					<h3>5-DAY FORECAST</h3>
				</div>

				{fiveDayForecast.map((item, index) => {
					return (
						<div className="forecast_card" key={index}>
							<table>
								<tbody>
								<tr className="forecast_card_row" >
									{item.slice(3, 4).map((item, index) => {										
										return (
								
											<tr className="forecast_card_icons" key={index}>
											<td>	<h3>{getWeekDay(item.dt_txt)}</h3> &nbsp; &nbsp; </td>
											<td>	<IconSwitch weather={item.weather[0].main} /> &nbsp; &nbsp; </td>
											<td>	<h5>{item.weather[0].main}</h5> &nbsp; &nbsp; </td>
											</tr>
										);
									})}
								  <td>	<img className="w-8 items-center" src="../image/heat.png" alt="termometro logo"></img> &nbsp; &nbsp; </td>
									<td><h5>Min {toCelsius(minTempForecast[index])}º</h5> &nbsp; &nbsp; </td>
									<td><h5>Max {toCelsius(maxTempForecast[index])}º</h5> &nbsp; &nbsp; </td>
									</tr>
								</tbody>
							</table>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Forecast;

// return (
// 	<>
// 		<div className="forecast_card_container">
// 			<div className="forecast_card_title">
// 			<img className="w-8 items-center" src= "../image/calendar.png" alt="calendar icon"/>	&nbsp; &nbsp; <h3>5-DAY FORECAST</h3>
// 			</div>
// 			{fiveDayForecast.map((item, index) => {
// 				return (
// 					<div className="forecast_card"  key={index}>
// 						{item.slice(3, 4).map((item, index) => {
// 							return (
// 								<div className="forecast_card_icons" key={index}>
// 									<h3>{getWeekDay(item.dt_txt)}</h3>  &nbsp; &nbsp;
// 									<IconSwitch weather={item.weather[0].main} />  &nbsp; &nbsp;
// 									<h5>{item.weather[0].main}</h5>  &nbsp; &nbsp;
// 								</div>
// 							);
// 						})}

// 						<img className="w-8 items-center" src="../image/heat.png" alt="termometro logo"></img>  &nbsp; &nbsp;
// 						<h5>Min {toCelsius(minTempForecast[index])}º</h5>  &nbsp; &nbsp;
// 						<h5>Max {toCelsius(maxTempForecast[index])}º</h5>  &nbsp; &nbsp;
// 					</div>
// 				);
// 			})}
// 		</div>
// 	</>
// );
