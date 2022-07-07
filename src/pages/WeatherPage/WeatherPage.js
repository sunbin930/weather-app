import { useState } from "react";
import styled from "styled-components";
import Forecast from "./components/Forecast";
import LocalWeather from "./components/LocalWeather";
import OtherCities from "./components/OtherCities/";

const WeatherPageContainer = styled.div`
  width: 820px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Layout = styled.div`
  display: flex;
  padding: 36px 0;
`;

const VerticalDivider = styled.div`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const WeatherPage = () => {
  const [cityId, setCityId] = useState(2147714);

  return (
    <WeatherPageContainer>
      <LocalWeather cityId={cityId} />
      <Layout>
        <OtherCities currentCityId={cityId} setCityId={setCityId} />
        <VerticalDivider />
        <Forecast cityId={cityId} />
      </Layout>
    </WeatherPageContainer>
  );
};

export default WeatherPage;
