import React from "react";
import "./InfoBlocks.css";
import LearnMore from "../../ui/btn-learn-more/learn-more";

import tabletImage from "../../../assets/images/devices/tablet.png";
import peoplesCollage from "../../../assets/images/peoples/peoples colection.png";
import person1 from "../../../assets/images/peoples/1.png";
import person2 from "../../../assets/images/peoples/2.png";
import person4 from "../../../assets/images/peoples/4.png";
import person5 from "../../../assets/images/peoples/5.png";
import person6 from "../../../assets/images/peoples/6.png";

const InfoBlocks = () => {
  return (
    <section className="info-blocks-section">
      <div className="container">
        
        <div className="info-row">
          <div className="info-text">
            <span className="section-label text-red">Credit Card</span>
            <h2>Payment<br /><span className="highlight-purple">Gets Easier</span></h2>
            <p className="description-text">
              Hac sem ut eget tellus diam convallis
              lacus a, interdum nulla sem adipiscing
              inw
            </p>
            <LearnMore />
          </div>
          <div className="info-image tablet-wrapper">
            <img src={tabletImage} alt="Tablet Interface" className="main-device tablet" />
          </div>
        </div>

        <div className="info-row row-reverse">
          <div className="info-text">
            <span className="section-label text-red">Mobile Transaction</span>
            <h2>Smart Mobile<br /><span className="highlight-purple">Banking</span></h2>
            <p className="description-text">
              Hac sem ut eget tellus diam convallis
              lacus a, interdum nulla sem adipiscing
              inw
            </p>
            <LearnMore />
          </div>
          <div className="info-image peoples-cluster">
            <div className="cluster-wrapper">
              <img src={person1} alt="Person 1" className="blob-img pos-1" />
              <img src={person2} alt="Person 2" className="blob-img pos-2" />
              <img src={person4} alt="Person 4" className="blob-img pos-4" />
              <img src={person5} alt="Person 5" className="blob-img pos-5" />
              <img src={person6} alt="Person 6" className="blob-img pos-6" />
            </div>
          </div>
        </div>
        
        <div className="info-row">
          <div className="info-text">
            <span className="section-label text-red">Secure Transaction</span>
            <h2>Safe Yours<br /><span className="highlight-purple">Savings</span></h2>
            <p className="description-text">
              Hac sem ut eget tellus diam convallis
              lacus a, interdum nulla sem adipiscing
              inw
            </p>
            <LearnMore />
          </div>
          <div className="info-image collage-wrapper">
            <img src={peoplesCollage} alt="Community Collage" className="collage-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoBlocks;
