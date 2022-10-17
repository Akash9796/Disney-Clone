import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { genre } from "../Features/genreSlice";
import { popular } from "../Features/popularSlice";
import { search } from "../Features/searchSlice";
import Display from "./Display";
import back from "../Images/home-background.png";

export default function Search() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  dispatch(popular(""));

  const handleLeft = () => {
    dispatch(genre("search/movie"));
  };
  const handleRight = () => {
    dispatch(genre("search/tv"));
  };
  const handleSearch = (e) => {
    setInput(e);
    dispatch(search(`${input}`));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Container>
      <Choose>
        <Left onClick={handleLeft}>
          <span>Movies</span>
        </Left>
        <hr />
        <Right onClick={handleRight}>
          <span>Series</span>
        </Right>
      </Choose>
      <Input>
        <input
          style={{ color: "black" }}
          type="text"
          //   value={input}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </Input>
      <Display />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  max-height: calc(100vh-70px);
  padding: 0 calc(3.5vw);
  position: relative;
  color: black;
  overflow-x: hidden;
  top: 80px;

  &:before {
    /* background: url("/Images/home-background.png") center center / cover
      no-repeat fixed; */
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

const Choose = styled.div`
  margin-right: 10px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  hr {
    height: 10px;
  }
`;
const Left = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  span {
    font-size: 2rem;
  }
`;
const Right = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  span {
    font-size: 2rem;
  }
`;
const Input = styled.div`
  margin-top: 5px;
  text-align: center;

  input {
    border: none;
    border-radius: 5px;
    font-size: 1.3rem;
    height: 35px;
    width: 50vw;
  }
`;
