import React from 'react';
import Billede from '../img/COLOURBOX21174823.jpg';


export default function Home() {
  return (
    <div className="Home">
        <h3>Hero Header</h3>
          <img className="billede" src={Billede} alt=""/>
    </div>
  );
}
