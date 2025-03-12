import React from 'react';
import calculateLuminance from '../utils/calculateLuminance';
import '../styles/style.css';

const ColorBox = ({ color, onSelect }) => {
  const isDark = calculateLuminance(color.color) <= 0.5;

  return (
    <div 
      className="color-box" 
      style={{ backgroundColor: color.color }}
      onClick={onSelect}
    >
      <div className={`color-box-content ${isDark ? 'light-text' : 'dark-text'}`}>
        <span className="color-name">{color.name}</span>
      </div>
    </div>
  );
};

export default ColorBox;
