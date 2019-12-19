import React from 'react';
import Tetris from './components/Tetris';
import SnowStorm from 'react-snowstorm';

const App = () => (
  <div className="App">
    <SnowStorm 
    snowStick = "false"
    snowCharacter = "*"
    snowWidthMax = "50px"
    snowHeightMax = "50px"
    flakesMaxActive = "280"
    flakesMax = "280"
    
    />
    <Tetris />
  </div>

);

export default App;