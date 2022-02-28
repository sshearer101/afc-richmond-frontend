import React from "react"

export default function ResultContainer({team, randomNumber}) {


    

    return(
        <div>

            {team.team_name == "Richmond" && <img src={team.logo} alt="image" className="crest-img" />}
            {team.team_id === randomNumber && <img src={team.logo} alt="image" className="crest-img" /> }

           {/* <img src={team.team_name == "Richmond" ? team.logo : null} alt="image" className="logo-image"/>
           <h2>{team.team_name == "Richmond" ? team.team_name : null}</h2>
            <h2>{team.team_id === randomNumber ? team.team_name : ""}</h2> */}
       </div>
    )
}


    {/* {Math.random(between 0-3)} */}
        {/* {Math.random(between 0-3)} */}
        {/* {generate match report} */}


