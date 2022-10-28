import styled from "styled-components";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h2>Enjoy your VEGGIE life</h2>
      <Background>
        <Image src="/../public/pizza.jpg" alt="Veggie Pizza" width={2400} height={1800} />
      </Background>
      ;
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: hidden;
  z-index: -10;
  @media (max-width: 600px) {
    display: none;
  }
`;
