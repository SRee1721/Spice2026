function Speakers({ img, name, description }) {
  return (
    <div>
      <img src={img} alt="speaker 1" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Speakers;
