import hexToRgb from "./hexToRGB";

function calculateLuminance(hex) {
    const rgb = hexToRgb(hex);
    return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  }
export default calculateLuminance;
  