import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100094656708396" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com/voltwheels90934" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/voltwheels123/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Voltwheels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
