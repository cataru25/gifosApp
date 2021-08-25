import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import { listaGifs } from './utils/mockBD';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header />
      <Search
        onClick={() => setShow(!show)}
      />
      <Results 
        show={show}
        data={listaGifs}
      />
    </div>
  )
}

export default App
