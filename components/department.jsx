import Cards from "./cards.jsx";
import { FaChartLine, FaCube, FaFileAlt } from "react-icons/fa";
import "../styles/department.css";

function Department() {
  return (
    <div className="dept">
      <h1>About the Department</h1>
      <p>
        The Department of Civil Engineering was started in the academic year
        2011-12 with the aim of promoting high quality education in the field of
        Civil Engineering. The department has well equipped laboratory
        facilities and highly qualified faculty members having rich experience
        in teaching and industrial background. The department is aiming to
        transform itself into a centre of excellence both in academics and
        research. The department provides the right kind of environment for the
        students to groom themselves for an innovative and challenging future.
        The department regularly organizes seminars, guest lectures, workshops,
        faculty development programs and conferences for the benefit of students
        and scholars. At the outset, the department is active in industrial
        collaboration and with sustainable & societal research.
      </p>

      <div className="dates-remember">
        <h1>Important Dates To Remember</h1>
        <div className="cards-container">
          <Cards
            icon={<FaChartLine />}
            heading="CALL FOR ABSTRACT"
            date="1 November 2025"
          />
          <Cards
            icon={<FaCube />}
            heading="ABSTRACT SUBMISSION DEADLINE"
            date="15 November 2025"
          />
          <Cards
            icon={<FaCube />}
            heading="ACCEPTANCE NOTIFICATION"
            date="30 November 2025"
          />
          <Cards
            icon={<FaFileAlt />}
            heading="CALL FOR FULL PAPERS"
            date="1 December 2025"
          />
          <Cards
            icon={<FaChartLine />}
            heading="FULL PAPER SUBMISSION"
            date="17 January 2026"
          />
          <Cards
            icon={<FaCube />}
            heading="ACCEPTANCE NOTIFICATION"
            date="1 February 2026"
          />
          <Cards
            icon={<FaCube />}
            heading="REGISTRATION OPENS"
            date="1 February 2026"
          />
          <Cards
            icon={<FaFileAlt />}
            heading="CAMERA READY PAPER"
            date="10 February 2026"
          />
          <Cards
            icon={<FaFileAlt />}
            heading="REGISTRATION CLOSES"
            date="13 February 2026"
          />
        </div>
      </div>

      {/* === SPEAKERS SECTION === */}
      <div className="speakers-section">
        <h1>Keynote Speakers</h1>
        <div className="speakers-grid">
          <div className="speaker-card">
            <img src="Dr. Mohamed Ahmed Hafez.jpeg" alt="Dr. Thanongsak Imjai" />
            <h3>Dr.Mohamed Ahmed Hafez</h3>
            <p>
              Associate Professor,
              <br />
              Department of Civil Engineering,
              <br />
              INTI International University,
              <br />
              Persiaran Perdana BBN Putra Nilai, 71800, Kampung Baharu Nilai,
              <br />
              Negeri Sembilan, Malaysia
            </p>
          </div>

          <div className="speaker-card">
            <img
              src="Dr. Cilcia Kusumastuti.jpeg "
              alt="Dr.Cilcia Kusumastuti"
            />
            <h3>Dr. Cilcia Kusumastuti</h3>
            <p>
              Civil Engineering Department,
              <br />
              Petra Christian University,
              <br />
              Jl. Siwalankerto No.121-131, Siwalankerto, Kec. Wonocolo,
              Surabaya,
              <br />
              Jawa Timur 60236, Indonesia
            </p>
          </div>

          <div className="speaker-card">
            <img src="Dr. Pijush Samui.jpeg" alt="Dr. Pijush Samui" />
            <h3>Dr. Pijush Samui</h3>
            <p>
              Professor
              <br />
              Department of Civil Engineering
              <br />
              NIT Patna, Patna, India
            </p>
          </div>

          <div className="speaker-card">
            <img src="Mr. Vikkana Sadasivam.jpeg" alt="Mr. Vikkana Sadasivam" />
            <h3>Mr. Vikkana Sadasivam</h3>
            <p>
              General Manager and Head - EDRC (Urban Transit SBG),
              <br />
              Larsen and Toubro Limited, Chennai, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
