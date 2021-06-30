import axios from "axios";

const handleQuery = () => {
  const { query } = this.state;
  axios.defaults.baseURL = "http://api.openweathermap.org";
  axios
    .get(`/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      this.props.forecast(response.data);
    });
  axios.defaults.baseURL = "http://api.openweathermap.org";
  axios
    .get(`/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      this.props.city(response.data);
      this.setState({
        main: false,
      });
    })

    .catch((error) => {
      console.log("error", error);
    });
};

export default handleQuery;
