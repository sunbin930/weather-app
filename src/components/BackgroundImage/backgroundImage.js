import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;

export default BackgroundImage;
