import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>Trivia App</h1>
      </div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/questions'>Questions</Link></li>
          <li><Link to='/random'>Random</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header