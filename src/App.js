import { useEffect, useState } from 'react'
import "./App.css";

import { Router, Routes, Route } from "react-router-dom";
import ClubHistory from "./components/ClubHistory";
import Characters from "./components/Characters";
import TeamQuiz from "./components/TeamQuizProfile";
import HateNate from "./components/HateNate";
import LandingPage from "./components/LandingPage";
import NavBar from './components/NavBar';

// const myAPI = 'http://localhost:4000'

function App() {
  ///** Below was trying to set the state up to import the react library for a dropdown not done yet. */
  // const [numberOfItems, setNumberOfItems] = useState(3);
  // const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);

  const [characters, setCharacters] = useState([])

  useEffect(() =>
      fetch (`http://localhost:4000/characters`)
        .then((res) => res.json())
        .then((data) => console.log(data, "wekjfnwekjfn"))
    , [],
  )

  /*const [state, setState] = useState({
    show: "false",
    //Need to set state to false so that when clicked it gets changed to true and dropdown appears.
  });
  const show = state.show;
  function open() {
    console.log(state.show + "it works");
    setState("true");
    console.log(state.show + "now");
  }

  function close() {
    setState(false);
  }*/

  
  return (
    <div>
      <NavBar /> 
      <div className="demo-big-content">
    
        <Routes>
          <Route path="/history" element={<ClubHistory />} />
        </Routes>
        <Routes>
          <Route path="/characters" element={<Characters />} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<TeamQuiz />} />
        </Routes>
        <Routes>
          <Route path="/hateNate" element={<HateNate />} />
        </Routes>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      </div>
  );
}

export default App;
