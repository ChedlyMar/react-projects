const Person = ({ person }) => {
  const { id, name, age, image } = { ...person };
  return (
    <>
      <img src={image} alt=""></img>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </>
  );
};

export default Person;
