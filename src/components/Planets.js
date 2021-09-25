import { useQuery } from 'react-query';
import Planet from './Planet';
import { useEffect, useState } from 'react';

const fetchPlantes = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Plantes = () => {
  const [page, setPage] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const { error, data, isSuccess, status, isFetching, refetch } = useQuery(
    ['planets', page],
    () => fetchPlantes(page),
    {
      staleTime: 3000,
      enabled: isEnabled,
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {' '}
      <h1> Planets </h1>
      {isFetching && <div>isFetching</div>}
      <p> {status}</p>
      <button onClick={() => setIsEnabled(!isEnabled)}>
        {isEnabled ? 'Disable' : 'Enable'}
      </button>
      {isSuccess && (
        <>
          <button onClick={() => refetch()}>Fetch Planets</button>
          {data.previous && (
            <button onClick={() => setPage(page - 1)}>Previous</button>
          )}
          {data.next && <button onClick={() => setPage(page + 1)}>Next</button>}
          {data.results.map((planet) => (
            <Planet planet={planet} />
          ))}
        </>
      )}
      {error && <div>{error.stack}</div>}
    </div>
  );
};

export default Plantes;
