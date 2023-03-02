import React, { useState } from 'react';
import './Navbar.css';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube  } from 'react-icons/fa'
import logo from '../../assets/app-icon.ico'

const Navbar = () => {

  const [nav, setNav]=useState(false);

  const handleNav=()=> {
    setNav(!nav)
  }

  return (
    <div className={nav? 'nav-bar navbar-bg' : 'nav-bar'}>
      <div className='logo'>
      <img src={logo} alt='logo'/>
        <h2>Travel</h2>
      </div>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Distinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
      </ul>
      <div className='navbar-icons'>
        <BiSearch style={{marginRight: '1.5rem'}}/>
        <BsPerson style={{marginRight: '1.5rem'}}/>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {nav?<AiOutlineClose/> : <HiOutlineMenuAlt4/>}
      </div>
      <div className={nav? "mobile-menu active-nav" : "mobile-menu"}>
        <ul className="mobile-navbar">
        <li>Home</li>
        <li>Distinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
        </ul>
        <div className="mobile-menu-btn">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebookF className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
            <FaTwitter className='icon'/>
            <FaPinterest className='icon'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
