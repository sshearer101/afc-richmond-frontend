import React, { useState } from "react";
import "./App.css";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import { Routes, Route } from "react-router-dom";
import ClubHistory from "./components/clubHistory";
import Characters from "./components/Characters";
import TeamQuiz from "./components/TeamQuizProfile";
import HateNate from "./components/hateNate";
import LandingPage from "./components/LandingPage";
import Logo from "./Media/Images/afcCrest2.jpg";
function App() {
  ///** Below was trying to set the state up to import the react library for a dropdown not done yet. */
  const [numberOfItems, setNumberOfItems] = useState(3);
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);

  /*const [state, setState] = useState({
    show: "false",
    //Need to set state to false so that when clicked it gets changed to true and dropdown appears.
  });
  const show = state.show;
  function open() {
    console.log(state.show + "it works");
    setState("true");
    console.log(state.show + "now");
  }

  function close() {
    setState(false);
  }*/
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
                  rel="noreferrer"
                >
                  <i className="fa fa-cart-plus" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://mobile.twitter.com/afcrichmond" target="blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?ctx_brand=tvs.sbd.4000&ign-itscg=MC_20000&ign-itsct=atvp_brand_omd&mttn3pid=Google%20AdWords&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019863_1-550313429253-c&mttnsubkw=125491392688__haJ0YKw5_&mttnsubplmnt="
                  Target="blank"
                >
                  <i className="fa fa-apple" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tedlassofans/" target="blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=3u7EIiohs6U"
                  target="blank"
                >
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
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
                <a href="hateNate">Hate Nate</a>
              </li>
              <li>
                <button {...buttonProps}>Example</button>
                <div className={isOpen ? "visible" : ""} role="menu">
                  <a {...itemProps[0]} href="https://example.com">
                    Regular link
                  </a>
                  <a {...itemProps[1]}>With click handler</a>
                </div>
              </li>
              <div className="dropdown">
                <li
                  className="dropdown-content" /*onClose={close} show={show}*/
                >
                  <a href="www.google.com">Link 1</a>
                  <a href="www.google.com">Link 2</a>
                  <a href="www.google.com">Link 3</a>
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

export default App;
