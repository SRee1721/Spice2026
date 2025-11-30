import Cards from "./card-1";

import "../styles/registration.css";

function Registration() {
  return (
    
    <div className="registration-page">
      <h1>Registration Fees</h1>

      
      <div className="fees">
        <Cards heading="Academician" date="₹2500" />
        <Cards heading="Student/Research scholar" date="₹1000" />
        <Cards heading="Industry Delegate" date="₹3500" />
        <Cards heading="Foreign delegates" date="$50" />
      </div>
    </div>
  );
}

export default Registration;
