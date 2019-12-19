import React from 'react';
import sound from './jingle-bells.mp3';

class AudioPlayer extends React.Component {
    
    render() {
        return (
            <div>
                <audio autoPlay>
                    <source src={sound} type="audio/mpeg" />
                </audio>
            </div>
        );
    };
};

export default AudioPlayer;
