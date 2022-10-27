import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>Impressum</StyledFooter>;
}

const StyledFooter = styled.p`
  position: absolute;
  bottom: 0;
  right: 10px;
  border-top: 2px dotted black;
`;
