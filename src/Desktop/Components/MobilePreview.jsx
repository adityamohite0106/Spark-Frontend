import React, { useState, useEffect } from "react";
import "../Pages/Mobilepreviewpopup.css"; // For the "Get Connected" popup

const MobilePreview = ({
  profileImage,
  profileTitle,
  bgColor,
  links,
  mobLinks,
  isBtnActiveForLink,
  isBtnActiveForShop,
  handleMobShopClick,
  handleMobLinkClick,
  selectedLayout,
  buttonStyle,
  selectedFont,
  selectedColor,
  theme,
}) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [imageSrc, setImageSrc] = useState("/Images/boyemoji.png");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobilePreviewVisible, setIsMobilePreviewVisible] = useState(!isMobile); // ✅ Always show on Desktop

  // Ensure `profileImage` is never empty
  useEffect(() => {
    if (profileImage && profileImage !== "/Image/boyemoji.png") {
      setImageSrc(profileImage);
    } else {
      setImageSrc("/Images/boyemoji.png");
    }
  }, [profileImage]);

  // ✅ Detect Screen Size and Reset Preview Visibility on Desktop
  useEffect(() => {
    const handleResize = () => {
      const mobileMode = window.innerWidth <= 768;
      setIsMobile(mobileMode);
      setIsMobilePreviewVisible(!mobileMode); // ✅ Always show on desktop, toggle on mobile
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to copy the public shareable link
  const handleShareClick = () => {
    const publicLink = `${window.location.origin}/preview?user=mobilepreview`;
    navigator.clipboard.writeText(publicLink);

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleGetConnectedClick = () => {
    setIsOverlayActive(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayActive(false);
  };

  // Toggle mobile preview visibility
  const toggleMobilePreview = () => {
    setIsMobilePreviewVisible(!isMobilePreviewVisible);
  };

  return (
    <div className={`page-container ${isOverlayActive ? "overlay-active" : ""}`} onClick={handleCloseOverlay}>
      {/* Notification */}
      {showNotification && <div className="notification">Link copied to clipboard!</div>}

      {/* ✅ Preview Button (Only in Mobile) */}
      {isMobile && !isMobilePreviewVisible && (
        <button className="preview-button" onClick={toggleMobilePreview}>
          <i className="fa fa-eye"></i> Preview
        </button>
      )}

      {/* ✅ Mobile Preview Popup (Always Visible on Desktop) */}
      {isMobilePreviewVisible && (
        <div className="mobile-preview-popup">
          <div className="mobile-preview" onClick={(e) => e.stopPropagation()}>
            {/* ✅ Close Button (Only in Mobile) */}
            {isMobile && (
              <button className="close-preview-button" onClick={toggleMobilePreview}>
                <i className="fa fa-times"></i> Unpreview
              </button>
            )}

            <img src="Images/mobile.png" alt="Mobile Frame" className="mobile-frame" />

            <div className="mobile-content">
              {/* Mobile Header with Share Button */}
              <div className="mobile-header" style={{ backgroundColor: bgColor }}>
                <button className="share-button" onClick={handleShareClick}>
                  <i className="fa fa-share-alt"></i>
                </button>

                <img src={imageSrc} alt="Profile" className="mobile-profile-pic" />
                <p className="mobile-title" style={{ fontFamily: selectedFont }}>{profileTitle}</p>
              </div>

              <div className="shop-link">
                <button onClick={handleMobLinkClick} className={`toggle-button ${isBtnActiveForLink ? "active" : ""}`}>
                  <i className="fa fa-link"></i> Link
                </button>
                <button onClick={handleMobShopClick} className={`toggle-button ${isBtnActiveForShop ? "active" : ""}`}>
                  <i className="fa fa-store"></i> Shop
                </button>
              </div>

              {isBtnActiveForLink && (
                <div className={`mobile-links ${selectedLayout}`} style={{ backgroundColor: theme }}>
                  {links?.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`link-button ${buttonStyle}`}
                      style={{ textDecoration: "none", fontFamily: selectedFont, color: selectedColor }}>
                      {link.icon && <img src={link.icon} alt="Icon" className="link-icon" />}
                      <span style={{ marginLeft: "5px" }}>{link.title}</span>
                    </a>
                  ))}
                </div>
              )}

              {isBtnActiveForShop && (
                <div className={`mobile-links ${selectedLayout}`} style={{ backgroundColor: theme }}>
                  {mobLinks?.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`link-button ${buttonStyle}`}
                      style={{ textDecoration: "none", fontFamily: selectedFont, color: selectedColor }}>
                      {link.icon && <img src={link.icon} alt="Icon" className="link-icon" />}
                      <span style={{ marginLeft: "5px" }}>{link.title}</span>
                    </a>
                  ))}
                </div>
              )}

              <button className="connectbtn" onClick={handleGetConnectedClick}>
                Get Connected
              </button>

              <p>
                <span><img src="/Images/Group.png" alt="logopng" className="mobilelogo" /></span>
                <b>SPARK</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePreview;
