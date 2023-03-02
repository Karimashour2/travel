import React from 'react';
import './Footer.css';
import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
const Footer = () => {
  return (
    <div className='footer'>
      
        <div className="top">
          <p>Travel</p> 
          <div className='social-logo'>
            <FiFacebook className='ico'/>
            <FiInstagram className='ico'/>
            <FiTwitter className='ico'/>
            <FiYoutube className='ico'/>
            <ImPinterest2 className='ico'/>
          </div>
        </div>

        <div className="bottom">
          <ul>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul>
            <li>Contacts</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contract</li>
          </ul>
        </div>
      
    </div>
  );
}

export default Footer;
