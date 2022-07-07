import styled from "styled-components";
import BackgroundImage from "../../../../components/BackgroundImage";
import image from "../../../../assets/background3.jpeg";
import CityName from "./components/CityName";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import getWeather from "../../../../apis/getWeather";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px 96px;
`;

const LocalWeather = ({ cityId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather(cityId).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BackgroundImage src={image}>
      <Layout>
        <Weather
          temperature={data.main.temp}
          weatherCondition={data.weather[0].main}
          humidity={data.main.humidity}
          windSpeed={data.wind.speed}
        />
        <CityName name={data.name} />
      </Layout>
    </BackgroundImage>
  );
};

export default LocalWeather;
