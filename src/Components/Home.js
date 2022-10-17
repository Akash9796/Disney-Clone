import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Display from "./Display";
import back from "../Images/home-background.png";

export default function Home() {
  return (
    <Container back={back}>
      <ImgSlider />
      <Viewers />
      <Display />
    </Container>
  );
}

const Container = styled.div`
/* border: 2px solid red; */
position: absolute;
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw);
  position: relative;
  color: black;
  overflow-x: hidden;
  top: 77px;

  &:before {
    background-image: url(${back});
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
`;
