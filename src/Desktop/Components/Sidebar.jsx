import React, { useState, useEffect } from "react";
import "../Pages/Sidebar.css"; // Import CSS

const Sidebar = ({ profileImage, profileTitle, onNavItemClick }) => {
  const [activeTab, setActiveTab] = useState("links"); // Track active tab
  const [showSignOut, setShowSignOut] = useState(false); // Track sign-out button visibility
  const [showNotification, setShowNotification] = useState(false); // Track notification visibility
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle sidebar on mobile

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Hide sidebar when switching to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle menu navigation
  const handleNavClick = (tab) => {
    setActiveTab(tab);
    onNavItemClick(tab);
    if (isMobile) setIsSidebarOpen(false); // Close sidebar after selection on mobile
  };

  // Toggle Sign Out button visibility
  const handleProfileClick = () => {
    setShowSignOut((prev) => !prev);
  };

  // Handle Sign Out
  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setShowNotification(true); // Show logout notification
    setTimeout(() => {
      setShowNotification(false);
      window.location.reload(); // Reload page after logout
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <>
      

      {/* ✅ Sidebar (Desktop & Mobile) */}
      <aside className={`sidebar ${isMobile ? (isSidebarOpen ? "open" : "closed") : ""}`}>
        {/* Logout Notification */}
        {showNotification && <div className="logout-notification">Logged out successfully!</div>}

        {/* ✅ Sidebar Logo */}
        <div className="logo_dashboard">
          <img src="/Images/Group.png" alt="Logo" />
          SPARK™
        </div>
        <div className="Mobile-dashboard-nav">
        <div className="logo_dashboard2">
          <img src="/Images/Group.png" alt="Logo" />
          SPARK™
        </div>

        {/* ✅ User Profile (Desktop Only) */}
        <div className="user-profile2" onClick={handleProfileClick}>
          <img src={profileImage || "/Images/boyemoji.png"} alt="User" className="profile-pic" />
          <span className="profile-name2">{profileTitle || "@opopo_0"}</span>
        </div>
        </div>
        {/* ✅ Navigation Menu */}
        <nav>
          <ul className="nav-links">
            <li className={activeTab === "links" ? "active" : ""} onClick={() => handleNavClick("links")}>
              <i className="fas fa-link"></i> Links
            </li>
            <li className={activeTab === "appearance" ? "active" : ""} onClick={() => handleNavClick("appearance")}>
              <i className="fas fa-paint-brush"></i> Appearance
            </li>
            <li className={activeTab === "analytics" ? "active" : ""} onClick={() => handleNavClick("analytics")}>
              <i className="fas fa-chart-line"></i> Analytics
            </li>
            <li className={activeTab === "settings" ? "active" : ""} onClick={() => handleNavClick("settings")}>
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </nav>
        <div className="user-profile" onClick={handleProfileClick}>
          <img src={profileImage || "/Images/boyemoji.png"} alt="User" className="profile-pic" />
          <span className="profile-name">{profileTitle || "Jenny Wilson"}</span>
        </div>
        {/* ✅ Sign Out Button */}
        {showSignOut && (
          <button className="signout-button" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </button>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
