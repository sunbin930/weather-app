import OpenWeatherMap from "../OpenWeatherMap";

const getForecast = (id) => {
  return OpenWeatherMap.get("/forecast", {
    params: {
      id,
    },
  });
};

export default getForecast;
