
import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import ClubHistory from './components/clubHistory';
import Characters from './components/Characters';
import TeamQuiz from './components/TeamQuizProfile';
import HateNate from './components/hateNate';

class App extends React.Component {
  render() {
  return (
  <div>

    <h1>A.F.C. Richmond</h1>
    <header>
    <nav>
      <ul>
        <li><a href="/history">History</a></li>
        <li><a href="/characters">Characters</a></li>
        <li><a href="quiz">Quiz</a></li>
        <li><a href="hateNate">HateNate</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
    </header>
    {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
    <div className="demo-big-content">

    
        <Routes>
            <Route path="/history" element={<ClubHistory/>}/>
        </Routes>
        <Routes>
            <Route path="/characters" element={<Characters/>}/>
        </Routes>
        <Routes>
            <Route path="/quiz" element={<TeamQuiz/>}/>
        </Routes>
        <Routes>
            <Route path="/hateNate" element={<HateNate/>}/>
        </Routes>

    </div>
  </div>
  );
}
}

export default App;
