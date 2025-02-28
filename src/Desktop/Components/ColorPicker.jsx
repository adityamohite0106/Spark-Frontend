import React from "react";

const ColorPicker = ({
  bgColor,
  handleColorChange,
  profileImage,
  profileTitle,
  bio,
  handleImageUpload,
}) => {
  return (
    <div className="profile-container2">
      {/* Header with Dynamic Background */}
      <div className="mobile-header2" style={{ backgroundColor: bgColor }}>
        <label htmlFor="imageUpload">
          <img
            src={profileImage || "Images/boyemoji.png"}
            alt="User"
            className="profile-image2"
          />
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />

       
        <h2 className="profile-title2">{profileTitle}</h2>
        <div className="profile-username2"><img src="/Images/Exclude.png" alt="" /><p style={{color:"grey"}}>{profileTitle}</p></div>
      </div>

      {/* Background Color Selection */}
      <div className="color-picker">
        <p>Custom Background Color</p>
        <div className="color-options">
          <button
            className="color-btn"
            style={{ backgroundColor: "#3d312a" }}
            onClick={() => handleColorChange("#3d312a")} 
          ></button>
          <button
            className="color-btn"
            style={{ backgroundColor: "#b4dcef", border: "1px solid #ccc" }}
            onClick={() => handleColorChange("#b4dcef")}
          ></button>
          <button
            className="color-btn"
            style={{ backgroundColor: "#000000" }}
            onClick={() => handleColorChange("#000000")}
          ></button>
        </div>
        <input type="text" className="color-input" value={bgColor} readOnly />
      </div>
    </div>
  );
};

export default ColorPicker;
