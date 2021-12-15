import React from "react";

import Team from "../Media/Images/teamafc.jpeg";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the dog track.</h1>
        <img
          className="teamPhoto"
          src={Team}
          width="100%"
          alt="team of people"
        />
      </div>
    );
  }
}

export default LandingPage;
