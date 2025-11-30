import { FaArrowRight } from "react-icons/fa";
import "../styles/card-1.css";

function Cards({ heading, date }) {
  return (
    <div className="card">
      <div className="card-icon">
        <FaArrowRight />
      </div>
      <div className="card-content">
        <div className="card-heading">{heading}</div>
        <div className="card-date">{date}</div>
      </div>
    </div>
  );
}

export default Cards;
