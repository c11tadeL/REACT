import React from 'react';
import '../../styles/style_home.css';

function Header() {
  return (
    <header className="container">
      <span className="logo">{'{Finsweet'}</span>
      <nav>
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/contact" className="btn">Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
