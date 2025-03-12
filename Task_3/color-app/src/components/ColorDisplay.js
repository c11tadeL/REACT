import React, { useEffect } from 'react';
import calculateLuminance from '../utils/calculateLuminance';
import copyToClipboard from '../utils/clipboard';
import '../styles/style.css';

const ColorDisplay = ({ color, onBack }) => {
  const isDark = calculateLuminance(color.color) <= 0.5;

  useEffect(() => {
    copyToClipboard(color.color);

    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = `Copied ${color.color} to clipboard!`;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
  }, [color]);

  return (
    <div 
      className="color-display" 
      style={{ backgroundColor: color.color }}
    >
      <button 
        className={`back-button ${isDark ? 'light-button' : 'dark-button'}`} 
        onClick={onBack}
      >
        ← Back
      </button>

      <div className={`color-info ${isDark ? 'light-text' : 'dark-text'}`}>
        <h1 className="color-name">{color.name}</h1>
        <h2 className="color-value">{color.color}</h2>
        <p className="copy-message">Color code copied to clipboard!</p>
      </div>
    </div>
  );
};

export default ColorDisplay;
