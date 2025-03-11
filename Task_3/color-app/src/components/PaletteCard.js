import React from 'react';
import '../styles/style.css';

const PaletteCard = ({ palette, onSelect }) => {
  return (
    <div className="palette-card" onClick={onSelect}>
      <div className="palette-preview">
        {palette.colors.slice(0, 15).map((color, index) => (
          <div 
            key={index} 
            className="palette-mini-color" 
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <div className="palette-info">
        <h3>{palette.paletteName}</h3>
        <div className="palette-emoji">{palette.emoji}</div>
      </div>
    </div>
  );
};

export default PaletteCard;