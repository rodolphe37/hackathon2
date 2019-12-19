import React from 'react';
import Tetris from './components/Tetris';
import SnowStorm from 'react-snowstorm';
import SurpriseSanta from 'surprise-santa';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  
  return (
    <div className="App"> 
      <AudioPlayer />
      <SnowStorm />
      <Tetris />
      <SurpriseSanta minTime={5} maxTime={10} />
    </div>
  );
};
