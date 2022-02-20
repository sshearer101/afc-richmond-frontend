import React from "react";
import ParticlesBg from "particles-bg";

function ClubHistory() {
  return (
    <div>
      <div className="clubHistory">
        <h1>A.F.C. Richmond Club History</h1>
        <h2>team of champions</h2>
      </div>
      <div>
        <ParticlesBg num={220} type="cobweb" bg={true} />
      </div>
    </div>
  );
}

export default ClubHistory;
