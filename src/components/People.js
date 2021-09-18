import { useQuery } from 'react-query';
import { useEffect } from 'react';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};

const People = () => {
  const { error, data, isSuccess, status } = useQuery('people', fetchPeople);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> People = {data?.count} </h1>
      {isSuccess && data.results.map((person) => <Person person={person} />)}
      <p> {status}</p>
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default People;