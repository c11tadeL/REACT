import React from 'react';
import ColorBox from './ColorBox';
import '../styles/style.css';

const ColorList = ({ palette, onColorSelect, onBack }) => {
  return (
    <div className="color-list-container">
      <div className="color-list-header">
        <button className="back-button" onClick={onBack}>← Back to Palettes</button>
        <h1 className="color-list-title">
          {palette.paletteName} {palette.emoji} <br/>Copyformat HEX #
        </h1>
      </div>
      <div className="color-list">
        {palette.colors.map((color, index) => (
          <ColorBox 
            key={index} 
            color={color} 
            onSelect={() => onColorSelect(color)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ColorList;