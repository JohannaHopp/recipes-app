import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <s>life</s> food is life
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  text-decoration: bold;
  border-bottom: 2px solid black;
`;
