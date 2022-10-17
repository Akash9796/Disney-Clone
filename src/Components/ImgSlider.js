import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { getAllMovies } from "../Features/movieSlice";
import Image1 from "../Images/slider-badging.jpg";
import Image2 from "../Images/slider-badag.jpg";
import { Link } from "react-router-dom";

export default function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const movies = useSelector(getAllMovies);

  return (
    <Carousel {...settings}>
      {/* {movies &&
        movies.map((movie, index) => {
          return (
            <Wrap key={index}>
              <Link to={`/detail/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
                  alt={movie?.name}
                />
              </Link>
            </Wrap>
          );
        })} */}
      <Wrap>
        <img src={Image1} alt="" />
      </Wrap>
      <Wrap>
        <img src={Image2} alt="" />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20p;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    /* max-width: 600px; */
    width: 100%;
    /* height: 100%; */
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  &:hover {
    img {
      border: 4px solid white;
    }
  }
`;
