import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaletteList from './components/PaletteList';
import ColorList from './components/ColorList';
import ColorDisplay from './components/ColorDisplay';
import './App.css';

function App() {
  const [palettes, setPalettes] = useState([]);
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/pallete.json')
      .then(response => response.json())
      .then(data => {
        setPalettes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading palette data:", error);
        setLoading(false);
      });
  }, []);

  const handlePaletteSelect = (palette) => {
    setSelectedPalette(palette);
    setSelectedColor(null);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    
    const audio = new Audio('/src_notify.mp3'); 
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  const handleBackToPalettes = () => {
    setSelectedPalette(null);
  };

  const handleBackToColors = () => {
    setSelectedColor(null);
  };

  if (loading) {
    return <div className="loading">Loading palettes...</div>;
  }

  return (
    <div className="app">
      <div className="header-container"> 
        <Header />
      </div>
      {selectedColor ? (
        <ColorDisplay 
          color={selectedColor} 
          onBack={handleBackToColors} 
        />
      ) : selectedPalette ? (
        <ColorList 
          palette={selectedPalette} 
          onColorSelect={handleColorSelect} 
          onBack={handleBackToPalettes} 
        />
      ) : (
        <PaletteList 
          palettes={palettes} 
          onPaletteSelect={handlePaletteSelect} 
        />
      )}
    </div>
  );
}

export default App;