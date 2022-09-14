import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllMovies } from "../Features/movieSlice";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../Features/movieSlice";
import axios from "axios";

export default function Display() {
  const page = useSelector((state) => state.page);
  const genre = useSelector((state) => state.genre);
  const popular = useSelector((state) => state.popular);
  const search = useSelector((state) => state.search);
  console.log(genre);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/${genre}/${popular}?api_key=219abf0a69c0d25a16cca43a3fa1c110&query=${search}&page=${
            page ? page : "1"
          }`
        )
        .then((resp) => {
          dispatch(addMovies(resp.data.results));
          console.log(resp.data.results);
        });
    };

    fetch();
  }, [page, genre, popular, search]);

  const movies = useSelector(getAllMovies);
  // console.log(movies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Wrap key={index}>
                <Link to={`/detail/${movie.id}`}>
                  <img aria-colspan={100} 
                    src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
                    alt={movie?.name}
                  />
                </Link>
              </Wrap>
            );
          })}
      </Content>
      <Pagination />
    </Container>
  );
}
const Container = styled.div`
  //  margin: 10px;
  padding: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 0 5px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
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

const Box = styled.div`
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
`;
