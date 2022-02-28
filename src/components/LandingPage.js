import React from "react";
import Team from "../Media/Images/teamafc.jpeg";
import ScoreBox from "./ScoreBox";

function LandingPage({teams}) {


  return (
    <div>
      <img className="teamPhoto" src={Team} width="100%" alt="team of people" />
    <ScoreBox teams={teams}/>

      <div className="gallery-div">
          Gallery of images to click on and scroll through
          Articles to click on
      </div>
      <br/>

      <div className="footer-div">
          Include Names (created by)
          Include links from top
          Address of stadium
          Club badge
          Sponsors
          
      </div>
    </div>
  );
}

export default LandingPage;
