import { useEffect, useState } from 'react';
import "./App.css";

import { Routes, Route } from "react-router-dom";
import ClubHistory from "./components/ClubHistory";
import CharactersPage from "./components/CharactersPage";
import TeamQuiz from "./components/TeamQuizProfile";
import HateNate from "./components/HateNate";
import LandingPage from "./components/LandingPage";
import NavBar from './components/NavBar';

// const myAPI = 'http://localhost:3000'

function App() {
  ///** Below was trying to set the state up to import the react library for a dropdown not done yet. */
  // const [numberOfItems, setNumberOfItems] = useState(3);
  // const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);

  const [characters, setCharacters] = useState([]);

  useEffect(() =>
      fetch (`/characters`)
        .then((res) => res.json())
        .then((json) => setCharacters(json))
    , [], 
  );


  return (
    <div>
      <NavBar /> 
      <div className="demo-big-content">
    
        <Routes>
          <Route path="/history" element={<ClubHistory/>} />
          <Route path="/characters" element={<CharactersPage characters={characters}/>} />
          <Route path="/quiz" element={<TeamQuiz />} />
          <Route path="/hatenate" element={<HateNate />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      </div>
  );
}

export default App;
