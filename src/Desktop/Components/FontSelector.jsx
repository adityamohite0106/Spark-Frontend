import React, { useState } from "react";
import "../Pages/FontSelector.css"; // Import CSS

const fonts = [
  { name: "DM Sans", value: "'DM Sans', sans-serif" },
  { name: "Poppins", value: "'Poppins', sans-serif" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
  { name: "Lato", value: "'Lato', sans-serif" },
];

const FontSelector = ({ onFontChange, onColorChange }) => {
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [alertMessage, setAlertMessage] = useState(""); // 🔹 Alert state

  const handleFontChange = (font) => {
    setSelectedFont(font);

    // 🔹 Show alert when font is clicked
    setAlertMessage("Oops! Font doesn't seem to be available on your device.");
    setTimeout(() => setAlertMessage(""), 3000); // Hide alert after 3 seconds

    if (onFontChange && typeof onFontChange === "function") {
      onFontChange(font);
    }
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    if (onColorChange && typeof onColorChange === "function") {
      onColorChange(color);
    }
  };

  return (
    <div className="font-selector-container">
      {/* 🔹 Custom Yellow Alert */}
      {alertMessage && <div className="alert alert-warning">{alertMessage}</div>}

      <h3>Fonts</h3>

      {/* Font Selection */}
      <div className="font-section">
        <div className="font-dropdown">
          {fonts.map((font, index) => (
            <div
              key={index}
              className={`font-option ${selectedFont === font.value ? "active" : ""}`}
              onClick={() => handleFontChange(font.value)}
              style={{ fontFamily: font.value }}
            >
              <span className="font-icon">Aa</span>
              {font.name}
            </div>
          ))}
        </div>
      </div>

      {/* Font Color Selection */}
      <div className="font-section">
        <h4>Color</h4>
        <div className="color-picker">
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
          />
          <span className="color-label">Color <br /> {selectedColor}</span>
        </div>
      </div>
    </div>
  );
};

// Default props
FontSelector.defaultProps = {
  onFontChange: () => {},
  onColorChange: () => {},
};

export default FontSelector;
