import OpenWeatherMap from "../OpenWeatherMap";

const getWeather = (id) => {
  return OpenWeatherMap.get("/weather", {
    params: {
      id,
    },
  });
};

export default getWeather;
