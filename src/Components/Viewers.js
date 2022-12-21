import React from "react";
import styled from "styled-components";
import Image1 from "../Images/viewers-disney.png";
import Image2 from "../Images/viewers-marvel.png";
import Image3 from "../Images/viewers-pixar.png";
import Image4 from "../Images/viewers-starwars.png";
import Image5 from "../Images/viewers-national.png";
export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={Image1} alt="" />
      </Wrap>
      <Wrap>
        <img src={Image2} alt="" />
      </Wrap>
      <Wrap>
        <img src={Image3} alt="" />
      </Wrap>
      <Wrap>
        <img src={Image4} alt="" />
      </Wrap>
      <Wrap>
        <img src={Image5} alt="" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 26px 0 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: 250ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 72%) 0px 16px 10px -10px;
  }
`;