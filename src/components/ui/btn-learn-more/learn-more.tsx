import arrowRight from "../../../assets/icons/arrow-right.svg";
import './learn-more.css';

const LearnMore = () => {
    return (
        <a href="#learn-more" className="learn-more-link">
            Learn more 
            <img src={arrowRight} alt="Arrow right" className="arrow-icon" />
          </a>
    );
};

export default LearnMore;