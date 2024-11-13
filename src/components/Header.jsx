import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.scss';
import logo from '../assets/karlov_icon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Karlov Logo" />
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__list">
          <li className="header__item"><Link to="/">Home</Link></li>
          <li className="header__item"><Link to="/about">About</Link></li>
          <li className="header__item"><Link to="/quiz">Quiz</Link></li> 
          <li className="header__item"><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/faq" className="header__faq">FAQ</Link>
      </nav>
      <button className="header__burger" onClick={toggleMenu}>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
    </header>
  );
};

export default Header;
