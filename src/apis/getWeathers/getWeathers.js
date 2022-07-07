import OpenWeatherMap from "../OpenWeatherMap";

const getWeathers = (ids) => {
  return OpenWeatherMap.get("/group", {
    params: {
      id: ids.join(),
    },
  });
};

export default getWeathers;
