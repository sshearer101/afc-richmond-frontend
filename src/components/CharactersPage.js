import React from "react";
import ForwardContainer from "./position components/ForwardContainer";
import MidfielderContainer from "./position components/MidfielderContainer";
import DefenderContainer from "./position components/DefenderContainer";
import GoalkeeperContainer from "./position components/GoalkeeperContainer";

function CharactersPage({characters}) {
  
  return (
    <div className="char-comp">
      <div className="gk-comp">
      <h1 className="position-header">Goalkeepers</h1>
      {characters.map((character) => <GoalkeeperContainer character={character} key={character.id}/>)}
      </div>
    
      <div className="def-comp">
      <h1 className="position-header">Defenders</h1>
      {characters.map((character) => <DefenderContainer character={character} key={character.id}/>)}
      </div>
      
      <div className="mid-comp">
      <h1 className="position-header">Midfielders</h1>
      {characters.map((character) => <MidfielderContainer character={character} key={character.id}/>)}
      </div>

      <div className="fwd-comp">
      <h1 className="position-header">Forwards</h1>
      {characters.map((character) => <ForwardContainer character={character} key={character.id}/>)}
      </div>

    </div>
  );
}

export default CharactersPage;
