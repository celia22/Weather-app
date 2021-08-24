const getWeekDay = date => {
	const options = {
		weekday: 'short',
		day: 'numeric',
	};

	const date2 = new Date(date);

	return date2.toLocaleDateString('es-ES', options);
};

export default getWeekDay;
