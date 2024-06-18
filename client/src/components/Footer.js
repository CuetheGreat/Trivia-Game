import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Trivia App. All rights reserved.</p>
        <ul>
          <li>
            <a href='/privacy-policy'>Privacy Policy</a>
          </li>
          <li>
            <a href='/terms-of-service'>Terms of Service</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
