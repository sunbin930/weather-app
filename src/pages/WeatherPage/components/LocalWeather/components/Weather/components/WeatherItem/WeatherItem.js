import styled from "styled-components";

const WeatherItemContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 0.75rem;
`;

const WeatherItem = ({ title, children }) => {
  return (
    <WeatherItemContainer>
      <Title>{title}</Title>
      <div>{children}</div>
    </WeatherItemContainer>
  );
};

export default WeatherItem;
