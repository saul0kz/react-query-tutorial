import { useQuery } from 'react-query';
import Planet from './Planet';
import { useEffect, useState } from 'react';

const fetchPlantes = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Plantes = () => {
  const [page, setPage] = useState(1);

  const { error, data, isSuccess, status, isFetching } = useQuery(
    ['planets', page],
    () => fetchPlantes(page),
    {
      staleTime: 5000,
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> Planets = {data?.count} </h1>
      {data?.previous && <button onClick={() => setPage(page-1)}>Previous</button>}
      {data?.next && <button onClick={() => setPage(page+1)}>Next</button>}
      {isFetching && <div>isFetching</div>}
      <p> {status}</p>
      {isSuccess && data.results.map((planet) => <Planet planet={planet} />)}
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default Plantes;
