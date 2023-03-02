import React from 'react';
import './Destinations.css';
import borabora from '../../assets/borabora.jpg';
import borabora2 from '../../assets/borabora2.jpg';
import keywest from '../../assets/keywest.jpg';
import maldives from '../../assets/maldives.jpg';
import maldives2 from '../../assets/maldives2.jpg';
import maldives3 from '../../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <div className='destinations'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img className='img-grid-colom-3 img-grid-row-2' src={borabora} alt="borabora" />
          <img src={borabora2} alt="borabora2" />
          <img src={keywest} alt="keywest" />
          <img src={maldives} alt="maldives" />
          <img src={maldives2} alt="maldives2" />
          <img src={maldives3} alt="maldives3" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
