import React from "react"
import ResultContainer from "./ResultContainer";
import {leagueData} from "./LeagueData"


export default function ScoreBox({teams}) {

  const randomNumber = Math.floor(Math.random() * 5) + 2;
  const nextGame = randomNumber + 1 === 7 ? Math.floor(Math.random()*5) + 1 : randomNumber + 1
  const homeTeam = "Richmond"
  const randomScore1 = Math.floor(Math.random() * 4);
  const randomScore2 = Math.floor(Math.random() * 4);
 

 


  return (

    // this page renders once, and prop is passed into result container in order to grab individual team objects
    <div>
      <div className="score-box">
      <h2 className="game-title">LAST GAME</h2>

        <div> {teams.map((team) => <ResultContainer team={team} key={team.id} homeTeam={homeTeam} />)}</div>

        <div className="last-game-score">
        {randomScore1}
              --
        {randomScore2}
        </div>
   
    
        <div> {teams.map((team) => <ResultContainer team={team} key={team.id} randomNumber={randomNumber}/>)}</div>

     
        <a className="game-title" href="">Match Report</a>

  
      </div>


      <div className="score-box">

      <h2 className="game-title">Next GAME</h2>
        <div> {teams.map((team) => <ResultContainer team={team} key={team.id} nextGame={nextGame}/>)}</div>
        <a className="game-title" href="">Tickets</a>

      </div>
    
      <div className="league-table">
      <h2 className="game-title">League</h2>
      <div className="league-table-data">
        <h1>{leagueData.position}</h1>
        <h4>P {leagueData.played}</h4>
        <h4>W {leagueData.win}</h4>
        <h4>D {leagueData.draw}</h4>
        <h4>L {leagueData.loss}</h4>
        <h4>Pts {leagueData.points}</h4>
      </div>

      </div>
  
    </div>
  )
}
