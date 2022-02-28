import React from "react"
import ResultContainer from "./ResultContainer";

export default function ScoreBox({teams}) {

  const randomNumber = Math.floor(Math.random() * 5) + 2;


  return (
    <div>
      <div className="last-game-div">
        <h2 className="game-title">LAST GAME</h2>
        <div> {teams.map((team) => <ResultContainer team={team} key={team.id} randomNumber={randomNumber}/>)}</div>

      </div>

      <br />


      <div className="next-game-div">
        <h2 className="game-title">Next GAME</h2>
        <img src="" alt="" className="" />
        {/* {team name, stadium} */}
        {/* {preview link} */}
      </div>
      <br />

      <div className="league-pos-div">
        League position (show position in league, games played(always more than
        4), wins/draws/losses, point total)
        {/* {Math.random(1-20 league position)} */}
      </div>
    </div>
  )
}