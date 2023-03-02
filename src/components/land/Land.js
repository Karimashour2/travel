import React from 'react';
import './Land.css';
import landVideo from '../../assets/maldivesVideo.mp4';
import {AiOutlineSearch} from 'react-icons/ai'


const Land = () => {
  return (
    <div className='landing'>
      <video autoPlay loop muted id='video'>
        <source src={landVideo} type='video/mp4'/>
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className='form'>
          <input type="text" placeholder='Search Distinations' />
          <button title='search'><AiOutlineSearch className='icon'/> </button>
        </form>
      </div>
    </div>
  );
}

export default Land;
