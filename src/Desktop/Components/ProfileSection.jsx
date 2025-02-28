import React from "react";

const ProfileSection = ({
  profileImage,
  profileTitle,
  bio,
  handleImageUpload,
  handleRemoveProfileImage,
  handleProfileUpdate, // Updated prop
}) => {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={profileImage || "Images/boyemoji.png"}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-buttons">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="image-upload-input"
              id="fileInput"
              style={{ display: "none" }}
            />
            <button
              className="pick-image-btn"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Pick an image
            </button>
            <button
              className="remove-image-btn"
              onClick={handleRemoveProfileImage}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="profile-info">
          <label className="profile-label">Profile Title</label>
          <input
            type="text"
            placeholder="Profile Title"
            value={profileTitle}
            onChange={(e) => handleProfileUpdate({ profileTitle: e.target.value })} // Use handleProfileUpdate
            className="profile-input"
          />

          <label className="profile-label">Bio</label>
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => handleProfileUpdate({ bio: e.target.value })} // Use handleProfileUpdate
            className="profile-textarea"
          ></textarea>
          <span className="char-count">{bio.length} / 80</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;