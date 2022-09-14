import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { genre } from "../Features/genreSlice";
import { popular } from "../Features/popularSlice";
import Display from "./Display";
import Home from "./Home";

export default function Series() {
  const dispatch = useDispatch();
  dispatch(genre("tv"));
  dispatch(popular("popular"));

  return (
    <Container>
      <Display />
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw);
  position: relative;
  color: black;
  overflow-x: hidden;

  &:before {
    background: url("/Images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
`;
