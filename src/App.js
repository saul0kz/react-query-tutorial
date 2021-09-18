
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
function App() {

  const [page, setPage] =  useState('planets');
  
  return (
    <div className="App">
     <h1>Star wars Info</h1>
     <Navbar setPage={setPage}/>
     <div className="content">
       {page === 'planets'? <Planets /> : <People/> }
     </div>
    </div>
  );
}

export default App;
