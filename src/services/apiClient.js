import axios from "axios";

class ApiService {
  constructor() {
    this.apiService = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
    });
  }

  cityRequest = async (query) => {
    try {
      const city = await this.apiService.get(
        `/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
      );
      return city;
    } catch (e) {
      console.log(e);
    }
  };

  weatherRequest = async (query) => {
    try {
      const forecast = await this.apiService.get(
        `/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
      );
      return forecast;
    } catch (e) {
      console.log(e);
    }
  };
}

const apiService = new ApiService();

export default apiService;
