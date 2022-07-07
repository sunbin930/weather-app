import styled from "styled-components";
import Temperature from "../../../../../../components/Temperature/Temperature";
import WeatherItem from "./components/WeatherItem";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemperatureStyle = styled(Temperature)`
  color: white;
  font-size: 5rem;
`;

const WeatherCondition = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
`;

const Layout = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 3rem;
`;

const VerticalDivider = styled.div`
  margin: 0 2rem;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Weather = ({ temperature, weatherCondition, humidity, windSpeed }) => {
  return (
    <WeatherContainer>
      <TemperatureStyle value={temperature} />
      <WeatherCondition>{weatherCondition}</WeatherCondition>
      <Layout>
        <WeatherItem title="HUMIDITY">{`${humidity}%`}</WeatherItem>
        <VerticalDivider />
        <WeatherItem title="WIND">{`${windSpeed} m/s`}</WeatherItem>
      </Layout>
    </WeatherContainer>
  );
};

export default Weather;
