import React from 'react';
import '../../styles/style_home.css';

function Header({ activeLink, onNavigate }) {
    return (
      <header className="container">
        <span className="logo">{'{Finsweet'}</span>
        <nav>
          <ul>
            <li>
              <a 
                href="#" 
                className={activeLink === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeLink === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('about');
                }}
              >
                About us
              </a>
            </li>
            <li>
                <a 
                    href="#" 
                    className={activeLink === 'pricing' ? 'active' : ''} 
                    onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing');
                    }}
                >
                    Pricing
                </a>
            </li>
            <li>
                <a 
                    href="#" 
                    className={`btn ${activeLink === 'contact' ? 'active' : ''}`} 
                    onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                    }}
                >
                    Contact us
                </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
export default Header;
