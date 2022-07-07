import { useEffect, useState } from "react";
import getWeathers from "../../../../apis/getWeathers/getWeathers";
import Section from "../../../../components/Section";
import CityWeather from "./components/CityWeather";

const OtherCities = ({ currentCityId, setCityId }) => {
  const [weathers, setWeathers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const OtherCitiesId = [2147714, 2158177, 2174003, 2063523].filter(
      (id) => id !== currentCityId
    );

    getWeathers(OtherCitiesId).then(({ data: { list } }) => {
      setWeathers(list);
      setLoading(false);
    });
  }, [currentCityId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Section title="Other Cities">
        {weathers.map(({ id, name, main: { temp }, weather: [weather] }) => {
          return (
            <CityWeather
              key={id}
              name={name}
              temperature={temp}
              weather={weather}
              onClick={() => setCityId(id)}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default OtherCities;
