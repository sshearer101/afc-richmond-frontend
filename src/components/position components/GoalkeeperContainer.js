import { useState } from 'react'
import PlayerInfo from '../PlayerInfo'
import { Link, Route, Routes } from "react-router-dom";


function GoalkeeperContainer({ character }) {
  const [show, setShow] = useState(false);
     
  function open(){
    setShow(true);
  }
  
  function close(){
    setShow(false);
  }


  if (character.field_placement === 'Goalkeeper') {


    return (
      
      <div className="player-card">

      {/* <a href="/player-info" className="a-link" onClick={handleClick}> */}
      {/* <Link to="/characters/player-info" element={<PlayerInfo/>} >sdfsdfdf </Link> */}
      {/* <Routes>
      <Route path="/characters/player-info" element={<PlayerInfo  character={character}/>} />
      </Routes> */}


      <button className="show-btn" onClick={open}>
       <PlayerInfo onClose={close} show={show} character={character}/>
</button>

        <img
          src={character.image}
          alt="character-image"
          className="character-img"
        /> 

       <h1 className='char-name-black'>{character.full_name}</h1>
            <h3 className='player-position-black'>{character.position}</h3>
            <div className="number-flag">
          <h3 className="jersey-number-black">{character.jersey_number}</h3>
          <img src={character.flag} alt="character-flag" className="flag-img" />
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default GoalkeeperContainer
