const getWeekDay = date => {
	const options = {
		weekday: 'short',
		day: 'numeric',
	};

	const date2 = new Date(date);

	return date2.toLocaleDateString('es-ES', options);
};

const kelvinToCelsius = kelvin => {
	const celsius = kelvin - 273;
	return celsius.toFixed(0);
};

export { getWeekDay };
export { kelvinToCelsius };
