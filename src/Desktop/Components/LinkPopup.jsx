import React from "react";

const LinkPopup = ({
  showLinkPopup,
  newLinkTitle,
  newLinkUrl,
  selectedIcon,
  setNewLinkTitle,
  setNewLinkUrl,
  setSelectedIcon,
  handleAddNewLink,
  handleClosePopup,
}) => {
  if (!showLinkPopup) return null;

  return (
    <div className="link-popup">
      <div className="popup-content">
        <h3>Enter URL</h3>
        <input
          type="text"
          placeholder="Link title"
          value={newLinkTitle}
          onChange={(e) => setNewLinkTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link URL"
          value={newLinkUrl}
          onChange={(e) => setNewLinkUrl(e.target.value)}
        />

        <div className="applications">
          <p>Applications</p>
          <div className="icon-container">
            {[
              { name: "Instagram", icon: "Images/instagram.png" },
              { name: "Facebook", icon: "Images/facebook.png" },
              { name: "YouTube", icon: "Images/youtube.png" },
              { name: "X", icon: "Images/x.png" },
            ].map((app) => (
              <button
                key={app.name}
                onClick={() => setSelectedIcon(app.icon)} // ✅ Calls `handleIconSelection`
                className="icon-button"
              >
                <img src={app.icon} alt={app.name} className="icon-img" />
                {app.name}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleAddNewLink} className="link-add-btn">
          Add
        </button>
        <button onClick={handleClosePopup} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default LinkPopup;