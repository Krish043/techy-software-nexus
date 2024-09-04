import React from 'react';
import './Hero.css';
import gif from '../assets/scroll.gif'
const Hero = () => {
  const handleButtonClick = () => {
  window.open('https://photos.google.com/', '_blank');
};
  return (
    <div id="hero">
        <div className="content">
          <h1>TECHY <span>SOFTWARE</span></h1>
          <p className="quote">"The only way to do great work is to love what you do." — Steve Jobs</p>
          <img src={gif} alt="" id='gif'/>
            <button onClick={handleButtonClick}>Google Photos</button>
        </div>
    </div>
  );
}

export default Hero;
