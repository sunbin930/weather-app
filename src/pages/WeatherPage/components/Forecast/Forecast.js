import { useEffect, useState } from "react";
import styled from "styled-components";
import getForecast from "../../../../apis/getForecast";
import Section from "../../../../components/Section";
import DailyWeather from "./components/DailyWeather";

const Layout = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;

const DAYS = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

const Forecast = ({ cityId }) => {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getForecast(cityId).then(({ data: { list } }) => {
      setForecast(
        list.filter((element) => element.dt_txt.includes("00:00:00"))
      );
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section title="Forecast">
      <Layout>
        {forecast.map(({ dt, dt_txt, weather: [weather], main: { temp } }) => {
          return (
            <DailyWeather
              key={dt}
              day={DAYS[new Date(dt_txt).getDay()]}
              weather={weather}
              temperature={temp}
            />
          );
        })}
      </Layout>
    </Section>
  );
};

export default Forecast;
