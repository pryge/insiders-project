import React from 'react';
import Header from '../../layout/Header/Header';
import bgImage from '../../../assets/images/background/main-gradient-background.svg';
import bgImageSmall from '../../../assets/images/background/main-gradient-background-small.svg';
import MonitorBig from '../../../assets/images/devices/Monitor-big.png';
import MonitorSmall from '../../../assets/images/devices/Monitor-small.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-layout">
      <div className="hero-background">
        <img src={bgImage} alt="Background" className="hero-background-img" />
        <img src={bgImageSmall} alt="Background" className="hero-background-img-small" />
      </div>
      <Header />
      <div className="hero-content-wrapper">
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Get Your<br />
              Payment Faster
            </h1>
            <p className="hero-description">
              Blinqpay helps businesses in Africa get paid by<br />
              anyone, anywhere in the world
            </p>
            <button className="btn btn-primary start-now-btn">
              Start Now
            </button>
          </div>
          
          <div className="hero-image-content">
            <div className="image-container">
              <img src={MonitorBig} alt="Monitor Big" className="monitor-big" />
              <img src={MonitorSmall} alt="Monitor Small" className="monitor-small" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-curve"> {/* Think about this curve */}
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C240 100 720 120 1440 0V120H0V0Z" fill="var(--color-bg-light)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
