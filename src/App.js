import styled from "styled-components";
import image from "./assets/background1.jpeg";
import BackgroundImage from "./components/BackgroundImage";
import WeatherPage from "./pages/WeatherPage";

const BackgroundImg = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <BackgroundImg src={image}>
      <WeatherPage />
    </BackgroundImg>
  );
};

export default App;
