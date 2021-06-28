const getWeekDay = (date) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  let date2 = new Date(date);
  console.log(date2);
  return date2.toLocaleDateString("es-ES", options);
};

export default getWeekDay;
