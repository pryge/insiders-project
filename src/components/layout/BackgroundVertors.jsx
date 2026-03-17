import React from 'react';
import WaveTop from '../assets/images/background/main-gradient-background.svg';
import WaveBottom from '../assets/images/background/main-gradient-background-small.svg';

const BackgroundVectors = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-white">
      <img 
        src={WaveTop} 
        alt="" 
        className="absolute top-0 right-0 w-[60%] md:w-auto object-contain"
      />

      <img 
        src={WaveBottom} 
        alt="" 
        className="absolute top-0 left-0 w-full h-auto object-cover"
      />
    </div>
  );
};

export default BackgroundVectors;