import { useQuery } from 'react-query';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};
const People = () => {
  const { error, data,  status } = useQuery('planets', fetchPeople);

  return (
    <div>
      {' '}
      <h1> People = {data?.count} </h1>
      
      <p> {status}</p>
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default People;
