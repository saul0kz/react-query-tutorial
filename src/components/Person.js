const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name} </h3>
      <p>mass - {person.mass} </p>
      <p>gender - {person.gender} </p>
    </div>
  );
};

export default Person;
