import styled from "styled-components";

const CityNameStyle = styled.div`
  margin-top: 16px;
  font-size: 2.5rem;
  font-weight: 500;
  color: white;

  &::after {
    content: "";
    display: block;
    margin-top: 1rem;
    height: 2px;
    background-color: white;
    border-radius: 2px;
    width: 50%;
    transform: translateX(50%);
  }
`;

const CityName = ({ name }) => {
  return <CityNameStyle>{name}</CityNameStyle>;
};

export default CityName;
