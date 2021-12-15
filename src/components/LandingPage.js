import React from "react";

import Team from "../Media/Images/teamafc.jpeg";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <img
          className="teamPhoto"
          src={Team}
          width="100%"
          alt="team of people"
        />
        <div>
          <h1>woot</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
