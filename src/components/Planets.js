import { useQuery } from 'react-query';
import Planet from './Planet';
import { useEffect } from 'react';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const People = () => {
  const { error, data, isSuccess, status } = useQuery('planets', fetchPeople);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> People = {data?.count} </h1>
      {isSuccess && data.results.map((planet) => <Planet planet={planet} />)}
      <p> {status}</p>
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default People;
