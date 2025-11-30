import Team from "./og-team";
import "../styles/organising.css";

function Organising() {
  return (
    <div className="organising-page">
      <h1>Organising Committee</h1>

      <div className="committe-grid">
        <Team
          name="Chief Patron"
          description="Dr. Shiv Nadar, Founder, SSN Institutions"
        />
        <Team
          name="Chairman SSN institutions"
          description="Mr. Sundar Mahalingam"
        />
        <Team
          name="General Co-Chair"
          description={`Dr. S. Radha, Principal, SSNCE
Dr. P. Ramasamy, Dean of Research, SSNCE`}
        />
        <Team
          name="Conference Chair"
          description={`Dr. N. Sivakumar
Organising Chairs:
Dr. Sivapriya S.V
Dr. P. Sangeetha
Dr. K. Vijayalakshmi`}
        />
        <Team
          name="Co-organizers"
          description={`Institution of Civil Engineers (UK)
Larsen & Toubro Ltd
Builder's Association of India
CREDAI, Chennai
CMTI, Bengaluru
Aritelia Consulting Engineers Ltd
Chennai Consolidated Construction Consortium Ltd, 
Indian Concrete Institute (ICI)
Institution of Engineers (IEI)
Indian Green Building Council (IGBC)`}
        />
        <Team
          name="Programme Committee"
          description={`Dr. K. Ramanjaneyulu
Dr. R. Rajkumar
Dr. S. Srinath Rajagopalan
Dr. V. Preethi
Dr. Ashwin Sriram
Dr. R. Surender Natarajan
Ms. R. Sumetha
Dr. R. Manikandan Karthik
Dr. V. Radhika`}
        />
      </div>
    </div>
  );
}

export default Organising;
// Dr. S. Shivakumar
