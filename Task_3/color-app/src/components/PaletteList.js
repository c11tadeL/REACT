import React from 'react';
import PaletteCard from './PaletteCard';
import '../styles/style.css';

const PaletteList = ({ palettes, onPaletteSelect }) => {
  return (
    <div className="palette-list-container">
      <h1 className="palette-list-title">Choose a Color Palette</h1>
      <div className="palette-list">
        {palettes.map((palette) => (
          <PaletteCard 
            key={palette.id} 
            palette={palette} 
            onSelect={() => onPaletteSelect(palette)} 
          />
        ))}
      </div>
    </div>
  );
};

export default PaletteList;