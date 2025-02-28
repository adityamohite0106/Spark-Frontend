import React, { useState, useEffect } from "react";
import "../Pages/EditProfile.css";
import "/src/Mobile/MobileEditProfile.css";

const EditProfile = ({ email: initialEmail, profileTitle: initialProfileTitle, setEmail, handleProfileUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: initialEmail || "",
    profileTitle: initialProfileTitle || "",
    password: "",
    confirmPassword: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Fetch token:", token);
        if (!token) {
          setAlertMessage("You need to log in first.");
          setAlertType("error");
          window.location.href = "/signin";
          return;
        }

        const response = await fetch(`${API_BASE_URL}/api/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Fetch response error:", errorData);
          if (response.status === 401) {
            setAlertMessage("Session expired. Please log in again.");
            setAlertType("error");
            localStorage.removeItem("token");
            window.location.href = "/signin";
            return;
          }
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();
        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || initialEmail || "",
          profileTitle: user.profileTitle || initialProfileTitle || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setAlertMessage("Cannot update now, please try later."); // Updated message
        setAlertType("error");
        setTimeout(() => setAlertMessage(""), 3000); // Auto-hide after 3s
      }
    };

    fetchUserData();
  }, [initialEmail, initialProfileTitle, API_BASE_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setAlertType("error");
      setTimeout(() => setAlertMessage(""), 3000);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token);
      if (!token) {
        setAlertMessage("You need to log in first.");
        setAlertType("error");
        window.location.href = "/signin";
        return;
      }

      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        profileTitle: formData.profileTitle,
      };
      if (formData.password) {
        updateData.password = formData.password;
      }

      const response = await fetch(`${API_BASE_URL}/api/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Update response error:", errorData);
        if (response.status === 401) {
          setAlertMessage("Session expired. Please log in again.");
          setAlertType("error");
          localStorage.removeItem("token");
          window.location.href = "/signin";
          return;
        }
        // Handle other HTTP errors (e.g., 500, 403)
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const updatedUser = await response.json();

      setEmail(updatedUser.user.email);
      handleProfileUpdate({ profileTitle: updatedUser.user.profileTitle });
      setAlertMessage(updatedUser.message || "Profile updated successfully!");
      setAlertType("success");
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setAlertMessage("Cannot update now, please try later."); // Updated message
      setAlertType("error");
      setTimeout(() => setAlertMessage(""), 3000); // Auto-hide after 3s
    }
  };

  return (
    <div className="edit-profile-container">
      {alertMessage && (
        <div className={`alert ${alertType === "success" ? "alert-success" : "alert-error"}`}>
          {alertMessage}
        </div>
      )}

      <h3 className="edit-profile-title">Edit Profile</h3>
      <hr className="title-underline" />

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Profile Title</label>
          <input
            type="text"
            name="profileTitle"
            value={formData.profileTitle}
            onChange={handleChange}
            placeholder="Enter your profile title (e.g., @username)"
          />
        </div>

        <div className="input-group">
          <label>New Password (optional)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>

        <div className="input-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your new password"
          />
        </div>

        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;