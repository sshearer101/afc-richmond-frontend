import React from "react";
import ParticlesBg from "particles-bg";
import Evil from "../Media/Images/EvilNate1.jpg";

function HateNate() {
  return (
    <div>
      <h1 className="nate-header">Hate Nate coming soon!!</h1>
      <img
        className="hateNate-pic"
        src={Evil}
        alt="evil Nate being mean to players"
      />
      <div className="particles">
        hello
        <ParticlesBg num={220} type="cobweb" bg={true} />
      </div>
    </div>
  );
}

export default HateNate;
