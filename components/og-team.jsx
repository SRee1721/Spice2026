
function Team({ name, description }) {
  return (
    <div className="team-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Team;
