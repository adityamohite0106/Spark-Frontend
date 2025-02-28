import React, { useState } from "react";
import "../Pages/LayoutSelector.css"; // Importing CSS file

const LayoutSelector = ({ onLayoutChange }) => {
  const [selectedLayout, setSelectedLayout] = useState("stack");

  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
    onLayoutChange(layout);
  };

  return (
    
    <div className="layout-container">
      <h4 className="layout-title">Layout</h4>
      <div className="layout-options">
        <div
          className={`layout-option ${selectedLayout === "stack" ? "active" : ""}`}
          onClick={() => handleLayoutChange("stack")}
        >
          <img src="/Images/stack.png" alt="Stack Layout" style={{border:"1px solid #000000",borderRadius:"5px"}} />
          <p>Stack</p>
        </div>
        <div
          className={`layout-option ${selectedLayout === "grid" ? "active" : ""}`}
          onClick={() => handleLayoutChange("grid")}
        >
          <img src="/Images/grid.png" alt="Grid Layout" />
          <p>Grid</p>
        </div>
        <div
          className={`layout-option ${selectedLayout === "carousel" ? "active" : ""}`}
          onClick={() => handleLayoutChange("carousel")}
        >
          <img src="/Images/carousel.png" alt="Carousel Layout" />
          <p>Carousel</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutSelector;
