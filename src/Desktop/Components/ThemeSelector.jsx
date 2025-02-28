import React from "react";
import "../Pages/ThemeSelector.css"; // Importing CSS file

const themes = {
  "Air Snow": { color: "#FFFFFF", image: "/Images/airsnow.png" },
  "Air Grey": { color: "#EAECEF", image: "/Images/Air Grey.png" },
  "Air Smoke": { color: "#2F3A3F", image: "/Images/Air Smoke.png" },
  "Air Black": { color: "#000000", image: "/Images/Air Black.png" },
  "Mineral Blue": { color: "#D9F0FF", image: "/Images/Mineral Blue.png" },
  "Mineral Green": { color: "#DFFAE0", image: "/Images/Mineral Green.png" },
  "Mineral Orange": { color: "#FFEAD4", image: "/Images/Mineral Orange.png" },
};

const ThemeSelector = ({ onThemeChange }) => {
  return (
    <div className="theme-selector">
      <h3 style={{ marginBottom: "8px" }}>Themes</h3>
      <div className="theme-grid">
        {Object.entries(themes).map(([name, { color, image }] ) => (
          <div key={name} className="theme-item" style={{ textAlign: "center", paddingTop: "5px" }}>
            <div
              className="theme-box"
              style={{ backgroundColor: color }}
              onClick={() => onThemeChange(color)}
            >
              <img src={image} alt={name} className="theme-image" />
            </div>
            <p className="theme-name">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
