import { FaChartLine, FaCube, FaFileAlt } from "react-icons/fa";
import "../styles/department.css";

function Cards({ icon, heading, date }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <div className="card-heading">{heading}</div>
        <div className="card-date">{date}</div>
      </div>
    </div>
  );
}

export default Cards;
