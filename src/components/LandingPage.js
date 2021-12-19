import React from "react";

import Team from "../Media/Images/teamafc.jpeg";

function LandingPage() {
  return (
    <div>
      <img className="teamPhoto" src={Team} width="100%" alt="team of people" />
      <div>
        <h1>
          This can be the component to hold score from the season / calender.
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
