import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Heading>Hello Gourmet!</Heading>
      <StyledText>Welcome to the world of recipies. Enjoy your stay!</StyledText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h1`
  color: red;
`;

const StyledText = styled.p`
  color: green;
`;
