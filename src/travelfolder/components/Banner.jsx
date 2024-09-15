import React from 'react';
const Banner = () => {
  return (
    <div className='bannerSection'>
      <div className='bannerBox'>
        <img src='assets/ba.jpg' alt='banner' className="transparentBanner" />
        <div className="bannerText">
          <h4>Explore</h4>
          <h2>Your City</h2>
          <h5>Find great places to stay, eat, shop, or visit from local experts</h5>
          <div className="searchBox">
            <input type="text" placeholder="Search..." className="searchInput" />
            <select className="searchDropdown">
              <option value="where">Where</option>
              <option value="places">Places</option>
              <option value="hotels">Hotels</option>
              <option value="restaurants">Restaurants</option>
            </select>
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
