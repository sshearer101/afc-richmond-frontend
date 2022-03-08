import React from "react";

export default function ResultContainer({team, randomNumber, nextGame, homeTeam}) {

    

    return(

            // this page renders as many times as there are teams. Attributes are conditionally met in order to render the correct team. 

        <div className="score-container">

            <div className="last-game">

            {team.team_name == homeTeam && <img src={team.logo} alt="image" className="crest-img" />}

            {team.team_id === randomNumber && <img src={team.logo} alt="image" className="crest-img" /> }

            
            </div>
        
            <div className="next-game">
            {team.team_id === nextGame && <img src={team.logo} alt="image" className="crest-img" /> }
            <div className="team-name-location">
            {team.team_id === nextGame && <h3> {team.team_name}</h3>}

            {team.team_id === nextGame && <h4>{team.location}</h4>}
            </div>
            {/* location, team name, tickets(link to ted lasso website) */}

            </div>

            <div className="league-table">


            </div>
       
       </div>
    )
}


    {/* {Math.random(between 0-3)} */}
        {/* {Math.random(between 0-3)} */}
        {/* {generate match report} */}

