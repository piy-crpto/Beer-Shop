import React from 'react';
import './BeerCard.css';
function BeerCard({ beer }) {
  return (
    // <div className="beer-card">
    //   <img src={beer.image_url} alt={beer.name} className="beer-image"/>
    //   <div className="beer-details">
    //   <h2>{beer.name}</h2>
    //   <p>{beer.tagline}</p>
    //   <p>First Brewed: {beer.first_brewed}</p>
    //     <p>Description: {beer.description}</p>
     
    //     <p>ABV: {beer.abv}%</p>
    //     <p>IBU: {beer.ibu}</p>
    //  </div>
    //   {/* <p>{beer.volume.value}</p> */}
    // </div>





//     <div className="card">
//     <img src={beer.image_url} alt={beer.name} className="beer-image"/>
//     <h2>{beer.name}</h2>
//     <p>{beer.tagline}</p>

//        <p>First Brewed: {beer.first_brewed}</p>
//          <p>Description: {beer.description}</p>
     
//          <p>ABV: {beer.abv}%</p>
//          <p>IBU: {beer.ibu}</p>


//          <p>Volume: {beer.volume.value }   {beer.volume.unit }</p>
// </div>








<div class="box">
            <div class="image">
            <img src={beer.image_url} alt={beer.name} className="beer-image"/>
                {/* <a href="#" class="fas fa-heart"></a> */}
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                {/* <a herf="#" className="btn">add to cart</a> */}
                <p>First Brewed: {beer.first_brewed}</p>
                <p>ABV: {beer.abv}%</p>
        <p>IBU: {beer.ibu}</p>
                <p >Volume: {beer.volume.value }   {beer.volume.unit }</p>
            </div>
        </div>

  );
}




    
 
       

export default BeerCard;






