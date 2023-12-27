// Navbar.js
import { WebpackImg } from '../Images';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className='left'>
        <div className="logo">
          <img src={WebpackImg} alt="webpack" />
        </div>
        <h1>How to create a template for React?</h1>
      </div>
      <div className='right'>
        <p id='light'>Light</p>
        <div className='toggle-btn' onClick={toggleDarkMode}>
          <div className={`inner-circle ${darkMode ? 'dark' : 'light'}`}></div>
        </div>
        <p id='dark'>Dark</p>
      </div>
    </nav>
  );
}
