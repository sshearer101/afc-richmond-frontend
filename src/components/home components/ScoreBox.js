import React from 'react'
import ResultContainer from './ResultContainer'
import { leagueData } from './LeagueData'

export default function ScoreBox({ teams }) {
  const randomNumber = Math.floor(Math.random() * 5) + 2

  const nextGame =
    randomNumber + 1 === 7
      ? Math.floor(Math.random() * 4) + 2
      : randomNumber + 1

  const homeTeam = 'Richmond'
  const randomScore1 = Math.floor(Math.random() * 4)
  const randomScore2 = Math.floor(Math.random() * 4)

  return (
    // this page renders once, and prop is passed into result container in order to grab individual team objects
    <div className="score-box">
      <div className="last-game-container">
        <h2 className="game-title">LAST GAME</h2>

        <div className="game-container">
          <div className="team-crest">
            {teams.map((team) => (
              <ResultContainer team={team} key={team.id} homeTeam={homeTeam} />
            ))}
          </div>

          <div className="last-game-score">{randomScore1}</div>
          <div className="last-game-score">{randomScore2}</div>

          <div className="team-crest">
            {' '}
            {teams.map((team) => (
              <ResultContainer
                team={team}
                key={team.id}
                randomNumber={randomNumber}
              />
            ))}
          </div>
        </div>

        <div className="match-report" >
          <a href="">
            Match Report
          </a>
        </div>
      </div>

      <div className="next-game-container">
        <h2 className="game-title">NEXT GAME</h2>
        <div className="next-game-team">
         
          {teams.map((team) => (
            <ResultContainer team={team} key={team.id} nextGame={nextGame} />
          ))}
        </div>
        <div className='tickets'>
        <a  href="">
          Tickets
        </a>
        </div>
      </div>

      <div className="league-table">
        <h2 className="league-title">League</h2>
        <div className="league-table-data">
          <h1>{leagueData.position}</h1>
          <h4 className="league-info">P <div> {leagueData.played} </div></h4>
          <h4 className="league-info">W <div> {leagueData.win} </div></h4>
          <h4 className="league-info">D <div> {leagueData.draw} </div></h4>
          <h4 className="league-info">L <div> {leagueData.loss} </div></h4>
          <h4 className="league-info">Pts <div> {leagueData.points} </div></h4>
        </div>
      </div>
    </div>
  )
}
