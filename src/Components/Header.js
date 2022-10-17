import React from "react";
import styled from "styled-components";

export default function Header({ user, logOut }) {
  return (
    <Nav>
      <Logo src="Images/logo.svg" />
      <Navmenu>
        <a href="/">
          <img src="/Images/home-icon.svg" alt="" />
          <h3>HOME</h3>
        </a>
        <a href="/">
          <img src="/Images/watchlist-icon.svg" alt="" />
          <h3>WATCHLIST</h3>
        </a>
        <a href="/search">
          <img src="/Images/search-icon.svg" alt="" />
          <h3>SEARCH</h3>
        </a>
        <a href="/">
          <img src="/Images/original-icon.svg" alt="" />
          <h3>ORIGINALS</h3>
        </a>
        <a href="/movie">
          <img src="/Images/movie-icon.svg" alt="" />
          <h3>MOVIES</h3>
        </a>
        <a href="/series">
          <img src="/Images/series-icon.svg" alt="" />
          <h3>SERIES</h3>
        </a>
      </Navmenu>
      {/* <Userimg src="/Images/favicon.svg"> */}
      <Userimg>
        <img
          src={
            user ? JSON.parse(window.localStorage.getItem("user")).photoURL : ""
          }
          alt=""
        />
      <SignOut onClick={logOut}>
        <a>SignOut</a>
      </SignOut>
      </Userimg>
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  height: 70px;
  background: #090b13;
  display: flex;
  padding: 0 20px;
  overflow-x: hidden;
  width: 100%;
  
`;

const Logo = styled.img`
  width: 6%;
  @media screen and (max-width: 600px) {
    width: 20%;
  }
`;

const Navmenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    text-decoration: none;
    cursor: pointer;
    img {
      width: 20px;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      color: white;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        width: 0px;
        background: white;
        position: absolute;
        // top:0px;
        left: 0px;
        right: 0;
        bottom: 2px;
        transition: 0.2s;
      }
    }
    &:hover {
      h3:after {
        width: 100%;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 35px;
  right: -15px;
  background: white;
  border-radius:  5px;
  width: 70px;
  height: 30px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  a{
    color: black;
    font-weight: 500;
  }
`;

const Userimg = styled.div`
max-width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: relative;
    max-width: 60px;
    width: 100%;
    border-radius: 50px;
  }

  &:hover {
    ${SignOut} {
      position: absolute;
      cursor: pointer;
      color: black;
      align-items: center;
      display: flex;
      justify-content: center;
      top: 40px;
      right: 30px;
    }
  }
`;


