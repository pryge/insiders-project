import React from "react";
import "./Partners.css";

import rangeRover from "../../../assets/images/partners/range-rover.svg";
import avengers from "../../../assets/images/partners/avengers.svg";
import etsy from "../../../assets/images/partners/etsy.svg";
import linkedin from "../../../assets/images/partners/linckedIn.svg";
import tiktok from "../../../assets/images/partners/tiktok.svg";

const Partner = [
  {
    image: rangeRover,
    alt: "Range Rover",
  },
  {
    image: avengers,
    alt: "Avengers",
  },
  {
    image: etsy,
    alt: "Etsy",
  },
  {
    image: linkedin,
    alt: "LinkedIn",
  },
  {
    image: tiktok,
    alt: "TikTok",
  },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-list">
          {Partner.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.image} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
