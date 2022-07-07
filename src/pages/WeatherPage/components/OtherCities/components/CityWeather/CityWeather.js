import styled from "styled-components";
import Temperature from "../../../../../../components/Temperature";
import WeatherIcon from "../../../../../../components/WeatherIcon";

const Button = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  background-color: transparent;
  font-size: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
  }
`;

const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
  font-size: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  width: 2rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-align: end;
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 50px;
  width: 50px;
`;

const CityWeather = ({ name, temperature, weather, onClick }) => {
  return (
    <Button onClick={onClick}>
      <CityName>{name}</CityName>
      <StyledTemperature value={Math.round(temperature)} />
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
    </Button>
  );
};

export default CityWeather;
