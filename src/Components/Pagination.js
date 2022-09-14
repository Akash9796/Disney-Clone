import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { next, prev } from "../Features/pageSlice";

export default function Pagination() {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const handlePrev = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
    dispatch(page > 1 ? prev(page - 1) : prev(page));
  };

  const handleNext = () => {
    setPage(page + 1);
    dispatch(next(page + 1));
  };

  return (
    <Page>
      <a href="#" onClick={handlePrev}>
        Previous
      </a>
      <a href="#" onClick={handleNext}>
        Next
      </a>
    </Page>
  );
}

const Page = styled.div`
  h1 {
    color: green;
  }

  position: relative;

  a {
    color: white;
    padding: 10px 18px;
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding: 15px;
  /* width: 700px;
  height: 200px; */
  border: 2px solid black;
`;
