import React from "react";
import Team from "../../Media/Images/team_image.jpeg";
import ScoreBox from "./ScoreBox";
import NewsContainer from "./NewsContainer";

function LandingPage({teams}) {


  return (
    <div className="home-page">
      <img className="team-photo" src={Team} width="100%" alt="team of people" />
    <ScoreBox teams={teams}/>

      <div className="gallery-div">
          {/* Gallery of images to click on and scroll through
          Articles to click on */}
      
      <NewsContainer />
      </div>
      <br/>

      <div className="footer-div">
          {/* Include Names (created by)
          Include links from top
          Address of stadium
          Club badge
          Sponsors */}
          
      </div>
    </div>
  );
}

export default LandingPage;
