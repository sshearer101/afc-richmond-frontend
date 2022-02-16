import React from "react";

import Team from "../Media/Images/teamafc.jpeg";

function LandingPage() {
  return (
    <div>
      <img className="teamPhoto" src={Team} width="100%" alt="team of people" />
      <div className="fixture-info">
          <div className="last-game-div">
              last game
                - include image of clubs, scores
              <img src="" alt="" className=""/> 
              {/* {Math.random(between 0-3)} */}
              {/* {Math.random(between 0-3)} */}
              <img src="" alt="" className=""/> 
              {/* {generate match report} */}
          </div>
          
          <br/>

          <div className="next-game-div">
              next game
                - include image of clubs, preview link
          </div>
          <br/>

        <div className="league-pos-div">
          League position (show position in league, games played(always more than 4), wins/draws/losses, point total)
        </div>


        <br/>
        <br/>

      </div>
      <div className="gallery-div">
          Gallery of images to click on and scroll through
          Articles to click on
      </div>
      <br/>

      <div classNane="footer-div">
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
