import axios from "axios";

const OpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    appid: "3bad4f64bc41f2cad783e1751bdc567f",
  },
});

export default OpenWeatherMap;
