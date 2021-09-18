import { useQuery } from 'react-query';
import Planet from './Planet';
import { useEffect } from 'react';

const fetchPlantes = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const Plantes = () => {
  const { error, data, isSuccess, status } = useQuery('planets', fetchPlantes);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> Planets = {data?.count} </h1>
      <p> {status}</p>
      {isSuccess && data.results.map((planet) => <Planet planet={planet} />)}
      
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default Plantes;
