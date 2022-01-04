import React from 'react'

function DefenderContainer({ character }) {
  if (character.field_placement === 'Defender') {
    return (
      <div className="player-card">
        <img
          src={character.image}
          alt="character-image"
          className="character-img"
        />
        <h1 className="char-name-white">{character.full_name}</h1>
        <h3 className="player-position-white">{character.position}</h3>
        <div className="number-flag">
          <h3 className="jersey-number-white">{character.jersey_number}</h3>
          <img src={character.flag} alt="character-flag" className="flag-img" />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default DefenderContainer
