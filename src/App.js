import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar2 from "./Components/Navbar2";
import Details from "./Components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Search from "./Components/Search";



function App() {

  useEffect(() => {
    
  }, []);

  return (
    <Router basename="Disney-clone">
      <div className="App">
      <Navbar2 />

        <Routes>
          {/* <Route path="/login" element={<Login user={user} logIn={logIn} />} /> */}
          <Route
            path="/"
            element={
              <>
                {/* <Header user={user} logOut={logOut} /> */}
                {/* <Navbar2 /> */}

                <Home />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <>
                {/* <Header user={user} logOut={logOut} /> */}
                <Details />
              </>
            }
          />
          <Route
            path="/movie"
            element={
              <>
                {/* <Header user={user} logOut={logOut} /> */}
                <Movies />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                {/* <Header user={user} logOut={logOut} /> */}
                <Series />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                {/* <Header user={user} logOut={logOut} /> */}
                <Search />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
