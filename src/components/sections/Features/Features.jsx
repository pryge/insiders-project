import React from 'react';
import './Features.css';
import human from '../../../assets/icons/human.svg';
import cash from '../../../assets/icons/cash.svg';
import analytics from '../../../assets/icons/analytics.svg';
import receipt from '../../../assets/icons/receipt.svg';
import LearnMore from '../../ui/btn-learn-more/learn-more';

const Features = () => {
  return (
    <section className="features-section section">
      <div className="container features-container">
        
        <div className="features-grid">
          
          <div className="features-col col-1">
            <div className="feature-card border-blue">
              <div className="feature-icon icon-blue">
                <img src={human} alt="Icon human"/>
              </div>
              <h3>Easy Access</h3>
              <p>Keep a close eye on your daily financial activities.</p>
            </div>
            
            <div className="feature-card border-blue">
              <div className="feature-icon icon-blue">
                <img src={analytics} alt="Icon analytics"/>
              </div>
              <h3>Use You Connect</h3>
              <p>Link your existing bank accounts effortlessly.</p>
            </div>
          </div>

          <div className="features-col col-2">
            <div className="feature-card border-purple">
              <div className="feature-icon icon-purple">
                <img src={cash} alt="Icon cash"/>
              </div>
              <h3>Cashflow Visibility</h3>
              <p>Get a clear overview of your incoming and outgoing funds.</p>
            </div>
            
            <div className="feature-card border-purple">
              <div className="feature-icon icon-purple">
                <img src={receipt} alt="Icon receipt"/>
              </div>
              <h3>Manage Invoicing</h3>
              <p>Create and send invoices directly from your dashboard.</p>
            </div>
          </div>
          
        </div>

        <div className="features-text">
          <div className="blob-bg"></div>
          <h2>Make &amp; Share <br/> <span className="highlight-purple">Payments</span> With Community</h2>
          <p>Seamlessly pay your friends, family, or business partners with our secure and fast community-driven payment network.</p>
          <LearnMore />
        </div>
      </div>
    </section>
  );
};

export default Features;
