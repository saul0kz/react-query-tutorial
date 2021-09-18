import { useQuery } from 'react-query';
import { useEffect } from 'react';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};

const People = () => {
  const { error, data, isSuccess, isFetching, status } = useQuery('people', fetchPeople, {
    staleTime: 50000,      
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> People = {data?.count} </h1>
      {isFetching && <div>isFetching</div>}
      <p> {status}</p>
      {isSuccess && data.results.map((person) => <Person person={person} />)}
     {error && <div>{error.stack}</div>}
    </div>
  );
};

export default People;