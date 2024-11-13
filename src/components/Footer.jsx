// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/karlov_icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Karlov Logo" className="footer-logo" />
        <p>© 2024 Karlov, Inc.<br />All rights reserved.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Quiz</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Explore More</h4>
          <ul>
            <li>FAQ</li>
            <li>Gallery</li>
            <li>Events</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="back-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
