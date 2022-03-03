import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './ui/Game';
import Menu from './ui/Menu';
import { beginner } from './ui/gameOptions';
import { useState } from 'react';

function App() {
  const [difficultyLevel, setDifficultyLevel] = useState(beginner);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/game'
            element={<Game difficultyLevel={difficultyLevel} />}
          />
          <Route
            path='/'
            element={<Menu setDifficultyLevel={setDifficultyLevel} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
