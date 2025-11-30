// 1. Import your new CSS file
import "../styles/author.css";

function Author() {
  return (
    // 2. Add a page wrapper for styling
    <div className="author-page">
      <h1>Participation As Author</h1>

      <div className="auth-info">
        <p>
          If one wants to participate as an author, he/she needs to submit an
          abstract of their work related to the conference theme in the
          prescribed format to the conference mail id, during the period when
          the call for abstracts opens. All abstracts will be subjected to
          review and intimation of the selection will be sent to the
          corresponding author. Following this, the author, need to send in
          their full manuscript in the prescribed format to the conference mail
          ID when the call for full papers is open. The submitted papers will be
          subjected to peer review and selected papers for presentation will be
          intimated to the authors within the stipulated time. Authors whose
          papers have been selected for presentation need to register for the
          conference as an author by paying the registration fee when the time
          for registration is open.
        </p>

        {/* 3. Classes are applied directly to the <p> tags */}
        <p className="auth-note">
          Only the registered authors will be allowed to participate and present
          their papers in the conference. Accepted papers shall be recommended
          for publications in Scopus Indexed Journals at an additional fee as
          required.
        </p>

        <p className="auth-submit">
          Submit your abstract to the following conference mail ID:
          spice2026@ssn.edu.in
        </p>

        
      </div>
    </div>
  );
}
export default Author;
