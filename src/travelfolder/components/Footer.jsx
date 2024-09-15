import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerNav">
        <a href="#about">About</a>
        <a href="#blogs">Blogs</a>
        <a href="#travel">Travel</a>
        <a href="#privacy">Privacy</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="#terms">Terms</a>
      </div>
      <div className="socialMediaIcons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="footerInfo">
        <p>All rights reserved here</p>
        <p>Travel wherever you want with our guidness</p>
      </div>
      <div className="footerExtra">
        <div className="footerExtraColumn">
          <h3>Product</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footerExtraColumn">
          <h3>About</h3>
          <ul>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footerExtraColumn">
          <h3>Advertising</h3>
          <ul>
            <li><a href="#press">Press</a></li>
            <li><a href="#email">Email</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#jobs">Jobs</a></li>
          </ul>
        </div>
        <div className="footerExtraColumn">
          <h3>Subscribe to Our App</h3>
          <p>Enter your email</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
          <p>Get the latest updates and news about our service.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
