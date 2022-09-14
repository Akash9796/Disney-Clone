import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Search from "./Components/Search";

const logOut = () => {
  signOut(auth).then(() => {
    window.location.pathname = "/login";
    localStorage.removeItem("user");
  });
};

const logIn = () => {
  signInWithPopup(auth, provider).then((result) => {
    window.localStorage.setItem("user", JSON.stringify(result.user));
  });
};

function App() {
  const [user, setuser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setuser(data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login user={user} logIn={logIn} />} />
          <Route
            path="/"
            element={
              <>
                <Header user={user} logOut={logOut} />
                <Home />
              </>
            }
          />
          <Route path="/detail/:id" element={<><Header user={user} logOut={logOut} /><Details /></>} />
          <Route path="/movie" element={<><Header user={user} logOut={logOut} /><Movies /></>} />
          <Route path="/series" element={<><Header user={user} logOut={logOut} /><Series /></>} />
          <Route path="/search" element={<><Header user={user} logOut={logOut} /><Search /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
