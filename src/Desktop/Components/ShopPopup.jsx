// components/ShopPopup.js
import React from "react";

const ShopPopup = ({
  shopPopup,
  newMobShopLink,
  NewMobShopkUrl,
  setNewMobShopLink,
  setNewMobShopUrl,
  handleAddNewShop,
  handleCloseMobModal,
}) => {
  if (!shopPopup) return null;

  return (
    <div className="link-popup">
      <div className="popup-content2">
        <h3>Enter URL</h3>
        <input
          type="text"
          placeholder="Shop title"
          value={newMobShopLink}
          onChange={(e) => setNewMobShopLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shop Url"
          value={NewMobShopkUrl}
          onChange={(e) => setNewMobShopUrl(e.target.value)}
        />
        <button onClick={handleAddNewShop} className="link-add-btn">
          Add
        </button>
        <button
          onClick={handleCloseMobModal}
          className="link-add-btn"
          style={{ backgroundColor: "red" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShopPopup;