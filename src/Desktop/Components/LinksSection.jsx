import React from "react";

const LinksSection = ({
  links,
  handleAddLinkClick,
  handleAddClickShop,
  handleDeleteLink,
  handleDeleteShop,
  
  isLinkActive,
  setIsAddShop,
  setIsLinkActive,
  handleAddShopCLick,
  handleBtn1Click,
  mobLinks
}) => {

  return (
    <section className="links">
      <div className="add-link-shop-container">
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${isLinkActive ? "active" : ""}`}
            // onClick={() => setIsLinkActive(true)}
            onClick={handleBtn1Click}
           
          >
            <i className="fa fa-store"></i> Add Link
          </button>
          <button   className={`toggle-button ${setIsAddShop ? "active" : ""}`} onClick={handleAddShopCLick} >
            <i className="fa fa-store"></i> Add Shop
          </button>
        </div>
        <button className="add-button" 
        onClick={() => {
          if (isLinkActive) {
            handleAddLinkClick(); 
          } else if (setIsAddShop) { // Check the actual state value
            handleAddClickShop();
          }
        }}
        >
          <i className="fa fa-plus"></i> Add
        </button>
        {/* {
          isLinkActive && (
            <>
            </>
          )
        } */}
          {/* {
          setIsAddShop && (
            <>
        <button className="add-button" onClick={handleAddLinkClick}>
          <i className="fa fa-plus"></i> mich
        </button>
            </>
          ) */}
        {/* } */}
        <div className="links-list">
          {isLinkActive && links.map((link, index) => (
            <div key={index} className="link-item">
              <div className="link-info">
                <h4>{link.title}</h4>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </div>
              <button
                className="delete-btn"
                  onClick={() => handleDeleteLink(index)}
                >
                Delete
              </button>
            </div>
          ))}

{setIsAddShop && mobLinks.map((link, index) => (
            <div key={index} className="link-item">
              <div className="link-info">
              {link.icon && (
                <img src={link.icon} alt="Icon" className="link-icon" />
              )}
                <h4>{link.title}</h4>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </div>
              <button
                className="delete-btn"
                  onClick={() => handleDeleteShop(index)}
                >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;