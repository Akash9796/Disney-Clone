import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAllMovies } from "../Features/movieSlice";

export default function Details({ m }) {
  const movies = useSelector(getAllMovies);
  const [movie, setMovie] = useState();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setMovie(movies.filter((i) => i.id == id)?.[0]);
    console.log(movie);
  }, [id]);

  return (
    <div>
      <Container>
        <Background>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
            alt={movie?.name}
          />
        </Background>
        <ImgCard>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
            alt={movie?.name}
          />
        </ImgCard>
        <Buttons>
          <Playbutton>
            <img src="/Images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Playbutton>
          <TrailerButton>
            <img src="/Images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/Images/group-icon.png" alt="" />
          </GroupWatchButton>
        </Buttons>
        <Text>
          <h1>{movie?.title}</h1>
          <span>{movie?.overview}</span>
        </Text>
      </Container>
    </div>
  );
}

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgCard = styled.div`
width: 20%;
img {
    width: 100%;
    border: 2px solid red;
    border-radius: 5px;
    transform: translateY(100px);
  }
`;

const Text = styled.div`
  padding: 20px;
  max-width: 800px;
  max-height: 200px;
`;

const Buttons = styled.div`
  width: 400px;
  margin-top: 200px;
  margin-left: 10px;
  padding: 0 10px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
`;
const Playbutton = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: white;
  border: 2px solid grey;
  cursor: pointer;
  overflow: hidden;
  transition: 250ms;
  span {
    color: black;
    margin-top: 8px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const TrailerButton = styled(Playbutton)`
  background: grey;
  border: 1px solid rgb(249, 249, 249);
`;
const AddButton = styled(Playbutton)`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  span {
    margin-top: -10px;
    font-size: 40px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: grey;
  border: 1px solid rgb(249, 249, 249);
`;
