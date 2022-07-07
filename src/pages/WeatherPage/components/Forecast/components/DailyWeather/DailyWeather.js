import styled from "styled-components";
import Temperature from "../../../../../../components/Temperature";
import WeatherIcon from "../../../../../../components/WeatherIcon";

const DailyWeatherContainer = styled.div`
  text-align: center;
  margin: 0 0.35rem;
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 70px;
  width: 70px;
`;

const Day = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  display: block;
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const DailyWeather = ({ day, weather, temperature }) => {
  return (
    <DailyWeatherContainer>
      <Day>{day}</Day>
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
      <StyledTemperature value={Math.round(temperature)} />
    </DailyWeatherContainer>
  );
};

export default DailyWeather;
