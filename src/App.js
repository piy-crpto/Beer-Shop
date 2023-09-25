import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import BeerList from './BeerList/BeerList';
import './Main.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
     <div className="container">
      <div className="heading">
      <h1 className='header'>Beer App  </h1>
      <h1 className='name'>Piyush-Tech</h1>
      </div>
      
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BeerList beers={beers} searchTerm={searchTerm} />
      
    </div>
  );
}

export default App;
