import React from 'react';
import sound from './jingle-bells.mp3';

export default function AudioPlayer() {
    
        return (
            <div>
                <audio autoPlay>
                    <source src={sound} type="audio/mpeg" />
                </audio>
            </div>
        );
};


