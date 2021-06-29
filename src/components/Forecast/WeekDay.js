const getWeekDay = (date) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  let date2 = new Date(date);

  return date2.toLocaleDateString("es-ES", options);
};

export default getWeekDay;
