import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/Dashboard.css";
import "/src/Mobile/MobileDashboard.css";
import "/src/Mobile/MobileNav.css";

import Sidebar from "../Components/Sidebar";
import MobilePreview from "../Components/MobilePreview";
import ProfileSection from "../Components/ProfileSection";
import LinksSection from "../Components/LinksSection";
import LinkPopup from "../Components/LinkPopup";
import ColorPicker from "../Components/ColorPicker";
import ShopPopup from "../Components/ShopPopup";
import LayoutSelector from "../Components/LayoutSelector";
import ButtonAppearance from "../Components/ButtonAppearance";
import FontSelector from "../Components/FontSelector";
import ThemeSelector from "../Components/ThemeSelector";
import EditProfile from "../Components/EditProfile";
import BarChart from "../Components/BarChart";
import DonutPieChart from "../Components/DonutPieChart";
import LineChart from "../Components/LineChart";
import TrafficLinkChart from "../Components/TrafficLinkChart";
import Counter from "../Components/Counter";

const Dashboard = () => {
  //////iconn

  const [iconCounts, setIconCounts] = useState({
    Instagram: 0,
    Facebook: 0,
    YouTube: 0,
    X: 0,
  });

  // ✅ This function updates both `selectedIcon` and `iconCounts`
  const handleIconSelection = (icon) => {
    setSelectedIcon(icon); // ✅ Keeps your existing functionality

    // ✅ Convert icon paths to readable names for the Pie Chart
    const iconMap = {
      "Images/instagram.png": "Instagram",
      "Images/facebook.png": "Facebook",
      "Images/youtube.png": "YouTube",
      "Images/x.png": "X",
    };

    const iconName = iconMap[icon]; // Convert path to name
    if (iconName) {
      setIconCounts((prevCounts) => ({
        ...prevCounts,
        [iconName]: (prevCounts[iconName] || 0) + 1, // ✅ Increment count
      }));
    }
  };

  useEffect(() => {
    localStorage.setItem("iconCounts", JSON.stringify(iconCounts));
  }, [iconCounts]);

  ////

  const [clicksOnLinks, setClicksOnLinks] = useState(() => {
    return parseInt(localStorage.getItem("clicksOnLinks")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("clicksOnLinks", clicksOnLinks);
  }, [clicksOnLinks]);

  const [clicksOnShop, setClicksOnShop] = useState(() => {
    return parseInt(localStorage.getItem("clicksOnShop")) || 0;
  });
  useEffect(() => {
    localStorage.setItem("clicksOnShop", clicksOnShop);
  }, [clicksOnShop]);

  // Function to increase Link counter
  const handleAddLinkClick = () => {
    setClicksOnLinks((prev) => prev + 1);
  };

  // Function to increase Shop counter
  const handleAddClickShop = () => {
    setClicksOnShop((prev) => prev + 1);
  };

  const [dashboardData, setDashboardData] = useState(() => {
    const storedData = localStorage.getItem("dashboardData");

    return storedData
      ? JSON.parse(storedData)
      : {
          email: "", // 🔹 Placeholder for user ID (replace with actual ID when needed)

          profile: {
            profileImage: "Images/boyemoji.png", // ✅ Default profile image
            profileTitle: "@opopo_08",
            bio: "",
          },

          links: [], // 🔹 Array of user links (title, url, icon)
          mobLinks: [], // 🔹 Array of mobile-specific links (title, url, icon)

          appearance: {
            layout: "default", // 🔹 Default layout
            buttonStyle: "default", // 🔹 Default button style
            selectedFont: "Arial", // 🔹 Default font
            selectedColor: "#000000", // 🔹 Default font color
            theme: "light", // 🔹 Default theme
            bgColor: "#ffffff", // 🔹 Default background color
          },

          analytics: {
            clicksOnLinks: 0, // 🔹 Tracks total clicks on links
            clicksOnShop: 0, // 🔹 Tracks total clicks on shop links
            iconCounts: {}, // 🔹 Object storing icon usage counts
          },

          settings: {
            notificationsEnabled: true, // 🔹 Default: notifications ON
            privacy: "public", // 🔹 Default: profile is public
          },

          createdAt: new Date().toISOString(), // 🔹 Timestamp
        };
  });

  useEffect(() => {
    localStorage.setItem("dashboardData", JSON.stringify(dashboardData));
  }, [dashboardData]);

  // State for profile
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  const [profileTitle, setProfileTitle] = useState(() => {
    return dashboardData?.profile?.profileTitle || "@opopo_08"; // ✅ Default if no data exists
  });

  useEffect(() => {
    localStorage.setItem("profileTitle", profileTitle);
  }, [profileTitle]);

  const [bio, setBio] = useState("");

  useEffect(() => {
    localStorage.setItem("bio", bio);
  }, [bio]);

  // State for links and shop links
  const [links, setLinks] = useState([]);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const [mobLinks, setMobLinks] = useState([]);
  useEffect(() => {
    localStorage.setItem("mobLinks", JSON.stringify(mobLinks));
  }, [mobLinks]);

  // State for popups
  const [showLinkPopup, setShowLinkPopup] = useState(false);
  useEffect(() => {
    localStorage.setItem("showLinkPopup", showLinkPopup);
  }, [showLinkPopup]);

  const [shopPopup, setShopPopup] = useState(false);
  useEffect(() => {
    localStorage.setItem("shopPopup", shopPopup);
  }, [shopPopup]);

  // State for new link and shop link inputs
  const [newLinkTitle, setNewLinkTitle] = useState("");
  useEffect(() => {
    localStorage.setItem("newLinkTitle", newLinkTitle);
  }, [newLinkTitle]);
  const [newMobShopLink, setNewMobShopLink] = useState("");
  useEffect(() => {
    localStorage.setItem("newMobShopLink", newMobShopLink);
  }, [newMobShopLink]);
  const [newLinkUrl, setNewLinkUrl] = useState("");
  useEffect(() => {
    localStorage.setItem("newLinkUrl", newLinkUrl);
  }, [newLinkUrl]);
  const [NewMobShopkUrl, setNewMobShopUrl] = useState("");
  useEffect(() => {
    localStorage.setItem("NewMobShopkUrl", NewMobShopkUrl);
  }, [NewMobShopkUrl]);

  // Theme selector
  const [theme, setTheme] = useState("#f5f5f5");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const [selectedIcon, setSelectedIcon] = useState(null);
  useEffect(() => {
    localStorage.setItem("selectedIcon", selectedIcon);
  }, [selectedIcon]);

  // State for background color
  const [bgColor, setBgColor] = useState("#3d312a");
  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
  }, [bgColor]);

  // State for active buttons
  const [isLinkActive, setIsLinkActive] = useState(true);
  useEffect(() => {
    localStorage.setItem("isLinkActive", isLinkActive);
  }, [isLinkActive]);
  const [isaddShop, setIsAddShop] = useState(false);
  useEffect(() => {
    localStorage.setItem("isAddShop", isaddShop);
  }, [isaddShop]);
  const [isMobLinkActive, setIsMobLinkActive] = useState(true);
  useEffect(() => {
    localStorage.setItem("isMobLinkActive", isMobLinkActive);
  }, [isMobLinkActive]);
  const [isMobShopActive, setIsMobShopActive] = useState(false);
  useEffect(() => {
    localStorage.setItem("isMobShopActive", isMobShopActive);
  }, [isMobShopActive]);

  // State for active navigation item
  const [activeNavItem, setActiveNavItem] = useState("links");
  useEffect(() => {
    localStorage.setItem("activeNavItem", activeNavItem);
  }, [activeNavItem]);

  // State for button style
  const [buttonStyle, setButtonStyle] = useState("fill");
  useEffect(() => {
    localStorage.setItem("buttonStyle", buttonStyle);
  }, [buttonStyle]);

  // Save alert
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    localStorage.setItem("showAlert", showAlert);
  }, [showAlert]);

// New state for notifications
const [notification, setNotification] = useState({ message: "", type: "" });

  const handleSave = async () => {
    try {
      if (!email) {
        console.error("❌ Email is missing. Cannot save data.");
        setNotification({ message: "Email is required to save data.", type: "error" });
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        return;
      }

      const updatedData = {
        email,
        profile: { profileImage, profileTitle, bio },
        links: links.length ? links : dashboardData.links || [],
        mobLinks: mobLinks.length ? mobLinks : dashboardData.mobLinks || [],
        appearance: {
          layout,
          buttonStyle,
          selectedFont,
          selectedColor,
          theme,
          bgColor,
        },
        analytics: { clicksOnLinks, clicksOnShop, iconCounts },
        settings: {
          notificationsEnabled: dashboardData.settings?.notificationsEnabled ?? true,
          privacy: dashboardData.settings?.privacy || "public",
        },
      };

      console.log("Sending to backend:", JSON.stringify(updatedData, null, 2));

      const response = await axios.put(
        `${API_BASE_URL}/api/dashboard?email=${email}`,
        updatedData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response from backend:", JSON.stringify(response.data, null, 2));

      setDashboardData((prevData) => {
        const newData = {
          ...prevData,
          ...response.data.dashboard,
          links: response.data.dashboard.links || prevData.links,
          mobLinks: response.data.dashboard.mobLinks || prevData.mobLinks,
        };
        console.log("Updated dashboardData:", JSON.stringify(newData, null, 2));
        return newData;
      });

      localStorage.setItem("dashboardData", JSON.stringify(response.data.dashboard));

      setNotification({ message: "Dashboard saved successfully!", type: "success" });
      setTimeout(() => setNotification({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error("❌ Error saving dashboard data:", error);
      setNotification({ message: "Failed to save dashboard. Please try again.", type: "error" });
      setTimeout(() => setNotification({ message: "", type: "" }), 3000);
    }
  };

  // State for layout
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "stack";
  });

  // State for font and color
  const [selectedFont, setSelectedFont] = useState("'DM Sans', sans-serif");
  const [selectedColor, setSelectedColor] = useState("#000000");

  // Handler for background color change
  const handleColorChange = (color) => setBgColor(color);
  useEffect(() => {
    localStorage.setItem("selectedColor", selectedColor);
  }, [selectedColor]);

  // Handler for font change
  const handleFontChange = (font) => setSelectedFont(font);
  useEffect(() => {
    localStorage.setItem("selectedFont", selectedFont);
  }, [selectedFont]);

  // Handler for text color change
  const handleTextColorChange = (color) => setSelectedColor(color);
  const handleProfileUpdate = (updatedProfile) => {
    if (updatedProfile.profileTitle !== undefined)
      setProfileTitle(updatedProfile.profileTitle);
    if (updatedProfile.profileImage !== undefined)
      setProfileImage(updatedProfile.profileImage);
    if (updatedProfile.bio !== undefined) setBio(updatedProfile.bio);

    const currentProfile = {
      profileImage:
        profileImage ||
        dashboardData.profile?.profileImage ||
        "Images/boyemoji.png",
      profileTitle:
        profileTitle || dashboardData.profile?.profileTitle || "@opopo_08",
      bio: bio || dashboardData.profile?.bio || "",
    };

    const updatedData = {
      ...dashboardData,
      profile: {
        ...currentProfile,
        ...updatedProfile,
      },
    };
    updateDashboardData(updatedData);
  };

  // Handler for adding a new link
  const handleAddNewLink = () => {
    if (newLinkTitle && newLinkUrl) {
      const newLink = {
        title: newLinkTitle,
        url: newLinkUrl,
        icon: selectedIcon || "",
      };

      // ✅ Update local state
      const updatedLinks = [...links, newLink];
      setLinks(updatedLinks);

      // ✅ Update `dashboardData.links`
      setDashboardData((prev) => ({
        ...prev,
        links: updatedLinks,
      }));

      // ✅ Save to MongoDB
      updateDashboardData({ links: updatedLinks });

      // ✅ Reset input fields
      setNewLinkTitle("");
      setNewLinkUrl("");
      setSelectedIcon(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Handler for adding a new shop link
  const handleAddNewShop = () => {
    if (newMobShopLink && NewMobShopkUrl) {
      const updatedShopLinks = [
        ...mobLinks,
        { title: newMobShopLink, url: NewMobShopkUrl },
      ];
      setMobLinks(updatedShopLinks);

      updateDashboardData({ ...dashboardData, shopLinks: updatedShopLinks }); // ✅ Save to MongoDB

      setIsMobShopActive(true);
      setIsMobLinkActive(false);
      setShopPopup(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("mobLinks", JSON.stringify(mobLinks));
  }, [mobLinks]);

  // Handler for appearance change
  const handleAppearanceChange = (updatedAppearance) => {
    const currentAppearance = {
      layout: layout || dashboardData.appearance?.layout || "stack", // Preserve layout
      buttonStyle:
        buttonStyle || dashboardData.appearance?.buttonStyle || "fill",
      selectedFont:
        selectedFont ||
        dashboardData.appearance?.selectedFont ||
        "'DM Sans', sans-serif",
      selectedColor:
        selectedColor || dashboardData.appearance?.selectedColor || "#000000",
      theme: theme || dashboardData.appearance?.theme || "#f5f5f5",
      bgColor: bgColor || dashboardData.appearance?.bgColor || "#3d312a",
    };

    const newAppearance = { ...currentAppearance, ...updatedAppearance };

    // Update individual states
    setLayout(newAppearance.layout);
    setButtonStyle(newAppearance.buttonStyle);
    setSelectedFont(newAppearance.selectedFont);
    setSelectedColor(newAppearance.selectedColor);
    setTheme(newAppearance.theme);
    setBgColor(newAppearance.bgColor);

    // Save to dashboardData and backend
    updateDashboardData({ appearance: newAppearance });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("buttonStyle", buttonStyle);
    localStorage.setItem("layout", layout);
    localStorage.setItem("selectedFont", selectedFont);
    localStorage.setItem("selectedColor", selectedColor);
  }, [theme, bgColor, buttonStyle, layout, selectedFont, selectedColor]);

  // Handler for closing the popup
  const handleClosePopup = () => {
    setShowLinkPopup(false);
    setNewLinkTitle("");
    setNewLinkUrl("");
    setSelectedIcon(null);
  };
  useEffect(() => {
    localStorage.setItem("showLinkPopup", showLinkPopup);
  }, [showLinkPopup]);

  // Handler for image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
  
      try {
        const token = localStorage.getItem("token");
        console.log("Uploading image with token:", token);
        const response = await fetch(`${API_BASE_URL}/api/dashboard/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
  
        const data = await response.json();
        console.log("Upload response:", data);
  
        if (response.ok) {
          handleProfileUpdate({ profileImage: data.imageUrl });
        } else {
          console.error("Image upload failed:", data.message);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  // Handler for removing profile image
  const handleRemoveProfileImage = (e) => {
    e.preventDefault();
    const defaultEmoji = "Images/boyemoji.png";
    setProfileImage(defaultEmoji);
    // Explicitly preserve existing profile fields
    updateDashboardData({
      profile: {
        profileImage: defaultEmoji,
        profileTitle:
          profileTitle || dashboardData.profile?.profileTitle || "@opopo_08",
        bio: bio || dashboardData.profile?.bio || "",
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  // Handler for toggling between links and shop
  const handleClickBtns = () => {
    setIsAddShop(true);
    setIsLinkActive(false);
  };

  const handleClickBtns2 = () => {
    setIsLinkActive(true);
    setIsAddShop(false);
  };

  // Handler for mobile shop click
  const handleMobShopClick = () => {
    setIsMobLinkActive(false);
    setIsMobShopActive(true);
  };

  // Handler for mobile link click
  const handleMobLinkClick = () => {
    setIsMobLinkActive(true);
    setIsMobShopActive(false);
  };

  // Handler for closing the mobile modal
  const handleCloseMobModal = () => {
    setShopPopup(false);
  };

  // Handler for navigation item click
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  // Update dashboard data

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const updateDashboardData = async (newData) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        console.error("❌ No email found in localStorage.");
        return;
      }
  
      const updatedData = {
        ...dashboardData,
        ...newData,
        appearance: {
          ...dashboardData.appearance,
          ...newData.appearance, // Deep merge appearance
        },
        links: newData.links || dashboardData.links || [],
        mobLinks: newData.mobLinks || dashboardData.mobLinks || [],
      };
  
      console.log("🔹 Merged Dashboard Data Before Sending:", JSON.stringify(updatedData, null, 2));
  
      const response = await axios.put(
        `${API_BASE_URL}/api/dashboard?email=${email}`,
        updatedData,
        { headers: { "Content-Type": "application/json" } }
      );
  
      setDashboardData(response.data.dashboard);
      localStorage.setItem("dashboardData", JSON.stringify(response.data.dashboard));
    } catch (error) {
      console.error("❌ Error updating dashboard data:", error);
    }
  };

  /// Fetch dashboard data
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    if (!email) {
      console.error("❌ No email found in localStorage.");
      return;
    }
  
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/dashboard?email=${email}`);
        const fetchedData = response.data;
        console.log("✅ Fetched Dashboard Data from MongoDB:", JSON.stringify(fetchedData, null, 2));

        // Fix profileImage URL if it uses localhost or http
        if (fetchedData.profile?.profileImage) {
          let fixedImageUrl = fetchedData.profile.profileImage;
          if (fixedImageUrl.startsWith("http://localhost:5000") || fixedImageUrl.startsWith("http://")) {
            fixedImageUrl = fixedImageUrl.replace(
              /^http:\/\/localhost:5000|^http:\/\/spark-backend-apj9\.onrender\.com/,
              API_BASE_URL
            );
          } else if (!fixedImageUrl.startsWith("https://")) {
            fixedImageUrl = `${API_BASE_URL}${fixedImageUrl.startsWith("/") ? "" : "/"}${fixedImageUrl}`;
          }
          fetchedData.profile.profileImage = fixedImageUrl;
        }

        setDashboardData(fetchedData);
        setProfileImage(fetchedData.profile?.profileImage || "Images/boyemoji.png");
        setProfileTitle(fetchedData.profile?.profileTitle || "@opopo_08");
        setBio(fetchedData.profile?.bio || "");
        setLinks(fetchedData.links || []);
        setMobLinks(fetchedData.mobLinks || []);
        setLayout(fetchedData.appearance?.layout || "stack");
        setButtonStyle(fetchedData.appearance?.buttonStyle || "fill");
        setSelectedFont(fetchedData.appearance?.selectedFont || "'DM Sans', sans-serif");
        setSelectedColor(fetchedData.appearance?.selectedColor || "#000000");
        setTheme(fetchedData.appearance?.theme || "#f5f5f5");
        setBgColor(fetchedData.appearance?.bgColor || "#3d312a");
        setClicksOnLinks(fetchedData.analytics?.clicksOnLinks || 0);
        setClicksOnShop(fetchedData.analytics?.clicksOnShop || 0);
        setIconCounts(fetchedData.analytics?.iconCounts || {
          Instagram: 0,
          Facebook: 0,
          YouTube: 0,
          X: 0,
        });

        localStorage.setItem("dashboardData", JSON.stringify(fetchedData));
      } catch (error) {
        console.error("❌ Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, [email]);

  return (
    <div className="dashboard-container">
    {/* Add Notification UI Here */}
    {notification.message && (
        <div className={`notification ${notification.type === "success" ? "success" : "error"}`}>
          {notification.message}
        </div>
      )}
      <Sidebar
        profileImage={profileImage}
        profileTitle={profileTitle}
        onNavItemClick={handleNavItemClick}
      />
      <main className="main-content">
        {activeNavItem === "links" && (
          <>
            <div className="congrats">
              <h1>Hi, {profileTitle}!</h1>
              <p style={{ padding: "10px" }}>
                Congratulations. You got a great response today.
              </p>
            </div>
            <div className="dashboard">
              <MobilePreview
                profileImage={profileImage}
                profileTitle={profileTitle}
                bgColor={bgColor}
                links={links}
                mobLinks={mobLinks}
                isBtnActiveForLink={isMobLinkActive}
                isBtnActiveForShop={isMobShopActive}
                handleMobShopClick={handleMobShopClick}
                handleMobLinkClick={handleMobLinkClick}
                selectedLayout={layout}
                buttonStyle={buttonStyle}
                handleFontChange={handleFontChange}
                selectedColor={selectedColor}
                theme={theme}
              />
              <div className="dashboard-content">
                <ProfileSection
                  profileImage={profileImage}
                  profileTitle={profileTitle}
                  bio={bio}
                  handleImageUpload={handleImageUpload}
                  handleRemoveProfileImage={handleRemoveProfileImage}
                  handleProfileUpdate={handleProfileUpdate} // Replace setProfileImage, setProfileTitle, setBio
                />
                <LinksSection
                  links={links}
                  handleAddLinkClick={() => {
                    setShowLinkPopup(true);
                    handleAddLinkClick();
                  }}
                  handleAddClickShop={() => {
                    setShopPopup(true);
                    handleAddClickShop();
                  }}
                  handleDeleteLink={(index) =>
                    setLinks(links.filter((_, i) => i !== index))
                  }
                  handleDeleteShop={(index) =>
                    setMobLinks(mobLinks.filter((_, i) => i !== index))
                  }
                  isLinkActive={isLinkActive}
                  setIsAddShop={isaddShop}
                  mobLinks={mobLinks}
                  setIsLinkActive={setIsLinkActive}
                  handleAddShopCLick={handleClickBtns}
                  handleBtn1Click={handleClickBtns2}
                />
                <ColorPicker
                  bgColor={bgColor}
                  handleColorChange={handleColorChange}
                  profileImage={profileImage}
                  profileTitle={profileTitle}
                  handleImageUpload={handleImageUpload}
                />
                <div>
                  <button
                    type="submit"
                    className="savebtn"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  {showAlert && (
                    <div className="alert">
                      Your Spark data has been updated
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {activeNavItem === "appearance" && (
          <div>
            <div className="congrats">
              <h1>Hi, {profileTitle}!</h1>
              <p style={{ padding: "10px" }}>
                Congratulations. You got a great response today.
              </p>
            </div>
            <div className="appearance-dashboard">
              <MobilePreview
                profileImage={profileImage}
                profileTitle={profileTitle}
                bgColor={bgColor}
                links={links}
                mobLinks={mobLinks}
                isBtnActiveForLink={isMobLinkActive}
                isBtnActiveForShop={isMobShopActive}
                handleMobShopClick={handleMobShopClick}
                handleMobLinkClick={handleMobLinkClick}
                selectedLayout={layout}
                buttonStyle={buttonStyle}
                handleFontChange={handleFontChange}
                selectedColor={selectedColor}
                theme={theme}
              />
              <div className="appearance-content">
              <LayoutSelector
  onLayoutChange={(newLayout) => handleAppearanceChange({ layout: newLayout })}
/>

                <div className="Button-container">
                <ButtonAppearance
  onButtonStyleChange={(newButtonStyle) =>
    handleAppearanceChange({ buttonStyle: newButtonStyle })
  }
/>
                </div>
                <FontSelector
                  onFontChange={(font) =>
                    handleFontChange({
                      ...dashboardData.appearance,
                      selectedFont: font,
                    })
                  }
                  onColorChange={(color) =>
                    handleAppearanceChange({
                      ...dashboardData.appearance,
                      selectedColor: color,
                    })
                  }
                />
                <ThemeSelector
                  onThemeChange={(newTheme) =>
                    handleAppearanceChange({ theme: newTheme })
                  }
                />
                <div>
                  <button
                    type="submit"
                    className="savebtn"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  {showAlert && (
                    <div className="alert">
                      Your Spark data has been updated
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeNavItem === "analytics" && (
          <div className="chart-container">
            <div className="congrats">
              <h1>Hi, {profileTitle}!</h1>
              <p style={{ padding: "10px" }}>
                Congratulations. You got a great response today.
              </p>
            </div>
            <div className="chart-content">
              <div>
                <Counter
                  clicksOnLinks={clicksOnLinks}
                  clicksOnShop={clicksOnShop}
                />
              </div>

              <LineChart />
              <div className="chart-container2">
                <BarChart />
                <DonutPieChart iconCounts={iconCounts} />
              </div>
              <TrafficLinkChart />
            </div>
          </div>
        )}

{activeNavItem === "settings" && (
  <div>
    <div className="congrats">
      <h1>Hi, {profileTitle}!</h1>
      <p style={{ padding: "10px" }}>
        Congratulations. You got a great response today.
      </p>
    </div>
    <EditProfile
      email={email}
      profileTitle={profileTitle}
      setEmail={setEmail}
      handleProfileUpdate={handleProfileUpdate}
    />
  </div>
)}
      </main>

      <LinkPopup
        showLinkPopup={showLinkPopup}
        newLinkTitle={newLinkTitle}
        newLinkUrl={newLinkUrl}
        selectedIcon={selectedIcon}
        setNewLinkTitle={setNewLinkTitle}
        setNewLinkUrl={setNewLinkUrl}
        setSelectedIcon={handleIconSelection}
        handleAddNewLink={handleAddNewLink}
        handleClosePopup={handleClosePopup}
      />

      <ShopPopup
        shopPopup={shopPopup}
        newMobShopLink={newMobShopLink}
        NewMobShopkUrl={NewMobShopkUrl}
        setNewMobShopLink={setNewMobShopLink}
        setNewMobShopUrl={setNewMobShopUrl}
        handleAddNewShop={handleAddNewShop}
        handleCloseMobModal={handleCloseMobModal}
      />
    </div>
  );
};

export default Dashboard;
