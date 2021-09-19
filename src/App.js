import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';


function Content() {
  const [page, setPage] = useState("planets");
  const pageSetter = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={pageSetter} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Loading/>
      <Content />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
