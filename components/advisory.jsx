import Team from "./og-team";

import "../styles/advisory.css";

const nationalMembers = [
  {
    name: "Prof. S. K. Bhattacharyya",
    description: "Vice-Chancellor, Shiv Nadar University, Chennai, India.",
  },
  {
    name: "Dr. N. Ganesan",
    description:
      "Professor(HAG), Department of Civil Engineering, NIT Calicut, India.",
  },
  {
    name: "Dr. G. Janardhanan",
    description:
      "Professor Dept. of Civil & Environmental Engineering NITTTR, Chennai,India.",
  },
  {
    name: "Dr. S. Ganesh Kumar",
    description:
      "Senior Scientist,Department of Civil Engineering Assistant Professor,Academy of Scientific & Innovative Research (AcSIR), CSIR, New Delhi,India.",
  },
  {
    name: "Mr. Narayanan C S",
    description:
      "Chief Executive Officer, Artelia Consulting Engineers Ltd., Chennai, India.",
  },
  {
    name: "Mr. K. Senthilnathan",
    description:
      "Executive Vice President, Larsen & Toubro Ltd., Chennai, India.",
  },
  {
    name: "Mr. S. Kaushik Ram",
    description:
      "Director, Consolidated Construction Consortium Ltd., Chennai, India.",
  },
  {
    name: "Mr. Nimrode. R",
    description:
      "Chairman, Builders Association of India, Southern Centre, Chennai, India.",
  },
  {
    name: "Mr. Ashok Kumar",
    description: "Chief Executive Officer, CMTI Bangaluru, India.",
  },
];

const internationalMembers = [
  {
    name: "Dr. Nemkumar (Nemy) Banthia",
    description:
      "Professor and Senior Canada Research Chair (Emeritus), Department of Civil Engineering, The University of British Columbia, Vancouver, B.C., Canada.",
  },
  {
    name: "Dr.Bashar S Mohammed",
    description:
      "Associate Professor, Civil Engineering, Universiti Teknologi Petronas,Malaysia.",
  },
  {
    name: "Dr. Thanongsak Imjai",
    description:
      "Associate Professorin Structural Engineering, Burapha University, Thailand",
  },
  {
    name: "Dr. Salmia Beddu",
    description:
      "Senior Lecturer, Universiti Tenaga Nasional, Malaysia. Dr. MoatasemFayyadh Principal Engineer - Civil and Structures, Sydney water, Greater Sydney Area, Sydney, Australia.",
  },
  {
    name: "Nur Irfah Mohd Pauzi",
    description:
      "Institute of Energy Infrastructure (IEI), Civil Engineering Dept., College of Engineering, 43009, Universiti Tenaga Nasional (UNITEN), Malaysia",
  },
];

function Advisory() {
  return (
    // Use a unique class for the page wrapper to scope the styles
    <div className="advisory-page">
      <h1>Advisory Committee</h1>

      {/* This container will hold the two columns */}
      <div className="level-container">
        {/* National Level Column */}
        <div className="national-column">
          <h2>National Level</h2>
          {nationalMembers.map((member, index) => (
            <Team
              key={index}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>

        {/* International Level Column */}
        <div className="international-column">
          <h2>International Level</h2>
          {internationalMembers.map((member, index) => (
            <Team
              key={index}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advisory;
