
import React from 'react'
import BeerCard from '../BeerCard/BeerCard';
import './BeerList.css';
const BeerList = ({ beers, searchTerm }) => {


      const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    

        <div className="box-container">
      {filteredBeers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
       
      ))}
    </div>
  );
}

export default BeerList
