import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import ClubHistory from "./components/clubHistory";
import Characters from "./components/Characters";
import TeamQuiz from "./components/TeamQuizProfile";
import HateNate from "./components/hateNate";
import LandingPage from "./components/LandingPage";
import Logo from "./Media/Images/afcCrest2.jpg";
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <a className="logo" href="/">
            <img className="logo-img" src={Logo} alt="richmond logo" />
          </a>
          <div className="links">
            <div className="social-media">
              <ul className="social-links">
                <li>
                  <a
                    href="https://wbshop.com/pages/ted-lasso?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNIkK5zvHD6-4Ew8BTrTKvRLjRv7NcBnqgUiInfq5vIPRQReXa9Pe7xoCUt0QAvD_BwE"
                    target="_blank"
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Youtube</a>
                </li>
              </ul>
            </div>
            <div className="navbar">
              <ul className="page-links">
                <li>
                  <a href="/history">History</a>
                </li>
                <li>
                  <a href="/characters">Characters</a>
                </li>
                <li>
                  <a href="quiz">Quiz</a>
                </li>
                <li>
                  <a href="hateNate">HateNate</a>
                </li>
                <div className="dropdown">
                  <li>
                    <a className="dropbtn">More+</a>
                  </li>
                  <li className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Routes>
            <Route path="/history" element={<ClubHistory />} />
          </Routes>
          <Routes>
            <Route path="/characters" element={<Characters />} />
          </Routes>
          <Routes>
            <Route path="/quiz" element={<TeamQuiz />} />
          </Routes>
          <Routes>
            <Route path="/hateNate" element={<HateNate />} />
          </Routes>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
