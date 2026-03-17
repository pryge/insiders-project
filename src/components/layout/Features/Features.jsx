import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section section">
      <div className="container features-container">
        
        <div className="features-grid">
          
          <div className="features-col col-1">
            <div className="feature-card border-blue">
              <div className="feature-icon icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Easy Access</h3>
              <p>Keep a close eye on your daily financial activities.</p>
            </div>
            
            <div className="feature-card border-blue">
              <div className="feature-icon icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Use You Connect</h3>
              <p>Link your existing bank accounts effortlessly.</p>
            </div>
          </div>

          <div className="features-col col-2">
            <div className="feature-card border-purple">
              <div className="feature-icon icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3>Cashflow Visibility</h3>
              <p>Get a clear overview of your incoming and outgoing funds.</p>
            </div>
            
            <div className="feature-card border-purple">
              <div className="feature-icon icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
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
          <a href="#learn-more" className="learn-more-link">
            Learn more 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
