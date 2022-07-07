import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 0 48px;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      <div>{children}</div>
    </SectionContainer>
  );
};

export default Section;
