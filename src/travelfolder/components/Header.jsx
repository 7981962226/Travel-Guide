
import React from 'react';
const Header = () => {
  return (
    <div className="headerSection">
      <div className="headerContent">
        <div className="logo">
          <img src="assets/logo2.jpg" alt="Logo" />
        </div>
        <div className="navMenu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="Hotel.jsx">Hotels</a></li>
            <li><a href="#places">Places</a></li>
            <li><a href="#booking">Booking</a></li>
          </ul>
        </div>
        <div className="right">
          <div className="signin">
            <a href="#signin">Sign In/Sign Out</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
