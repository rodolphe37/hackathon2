import React from 'react';
import Tetris from './components/Tetris';
import Snowf from './components/Snowf.js';
import neige from './img/neige.png';
import SurpriseSanta from 'surprise-santa';
import AudioPlayer from './components/AudioPlayer';


export default function App() {
  
  return (
    <div className="App"> 
     <Snowf
      amount={200}
      size={11}
      speed={5}
      wind={5}
      color="#fff"
      opacity={0.8}
      swing={1}
      image={neige}
      zIndex={null}
      resize={true}
      />
      <AudioPlayer />
      <Tetris />
      <SurpriseSanta minTime={5} maxTime={10} />
    </div>
  );
};
