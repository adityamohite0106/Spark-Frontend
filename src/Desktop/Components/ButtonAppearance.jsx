import React, { useState } from "react";
import "../Pages/ButtonAppearance.css"; // Import CSS

const ButtonAppearance = ({ onButtonStyleChange }) => {
  const [selectedStyle, setSelectedStyle] = useState("fill");

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    onButtonStyleChange(style); // Send style change to MobilePreview
  };

  return (
    <div className="button-appearance-container">
      <h3>Buttons</h3>

      {/* Button Styles */}
     

      <div className="button-section">
        <h4>Outline</h4>
        <button
          className={`button-style outline ${selectedStyle === "outline" ? "active" : ""}`}
          onClick={() => handleStyleChange("outline")}
        >
        </button>
        <button
          className={`button-style outline2 ${selectedStyle === "outline2" ? "active" : ""}`}
          onClick={() => handleStyleChange("outline2")}
        >
        </button>
        <button
          className={`button-style outline3 ${selectedStyle === "outline3" ? "active" : ""}`}
          onClick={() => handleStyleChange("outline3")}
        >
        </button>
      </div>

      <div className="button-section">
        <h4>Hard Shadow</h4>
        <button
          className={`button-style hard-shadow ${selectedStyle === "hard-shadow" ? "active" : ""}`}
          onClick={() => handleStyleChange("hard-shadow")}
        > 
        </button>
        <button
          className={`button-style hard-shadow2 ${selectedStyle === "hard-shadow2" ? "active" : ""}`}
          onClick={() => handleStyleChange("hard-shadow2")}
        > 
        </button>
        <button
          className={`button-style hard-shadow3 ${selectedStyle === "hard-shadow3" ? "active" : ""}`}
          onClick={() => handleStyleChange("hard-shadow3")}
        > 
        </button>
      </div>

      <div className="button-section">
        <h4>Soft Shadow</h4>
        <button
          className={`button-style soft-shadow ${selectedStyle === "soft-shadow" ? "active" : ""}`}
          onClick={() => handleStyleChange("soft-shadow")}
        >
        </button>
        <button
          className={`button-style soft-shadow2 ${selectedStyle === "soft-shadow2" ? "active" : ""}`}
          onClick={() => handleStyleChange("soft-shadow")}
        >
        </button>
        <button
          className={`button-style soft-shadow3 ${selectedStyle === "soft-shadow3" ? "active" : ""}`}
          onClick={() => handleStyleChange("soft-shadow")}
        >
        </button>
      
      </div>
      {/*  */}

      <div className="button-section">
        <h4>Special</h4>
       
        <button
          className={`button-style special2 ${selectedStyle === "special2" ? "active" : ""}`}
          onClick={() => handleStyleChange("special2")}
        >
        </button>
        <button
          className={`button-style special3 ${selectedStyle === "special3" ? "active" : ""}`}
          onClick={() => handleStyleChange("special3")}
        >
        </button>
        <button
          className={`button-style special ${selectedStyle === "special" ? "active" : ""}`}
          onClick={() => handleStyleChange("special")}
        >
        </button>
      </div>

      {/*  */}
      <div className="button-section">
        <h4>Fill</h4>
        <button
          className={`button-style fill ${selectedStyle === "fill" ? "active" : ""}`}
          onClick={() => handleStyleChange("fill")}
        >
        </button>
        <button
          className={`button-style fill2 ${selectedStyle === "fill2" ? "active" : ""}`}
          onClick={() => handleStyleChange("fill2")}
        >
        </button>
        <button
          className={`button-style fill3 ${selectedStyle === "fill3" ? "active" : ""}`}
          onClick={() => handleStyleChange("fill3")}
        >
        </button>
      </div>

    
    </div>
  );
};

export default ButtonAppearance;
