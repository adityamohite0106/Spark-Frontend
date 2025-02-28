import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Category.css";
import "/src/Mobile/MobileCategory.css";

const categories = [
  { name: "Business", emoji: "💼" },
  { name: "Creative", emoji: "🎨" },
  { name: "Education", emoji: "📚" },
  { name: "Entertainment", emoji: "🎵" },
  { name: "Fashion & Beauty", emoji: "🧪" },
  { name: "Food & Beverage", emoji: "🍕" },
  { name: "Government & Politics", emoji: "⚖️" },
  { name: "Health & Wellness", emoji: "🍎" },
  { name: "Non-Profit", emoji: "💗" },
  { name: "Other", emoji: "💗" },
  { name: "Tech", emoji: "🖥️" },
  { name: "Travel & Tourism", emoji: "✈️" },
];

const Category = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Redirect if user is NOT authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("⚠️ Access denied. Please log in first.");
      setTimeout(() => navigate("/signin"), 2000); // Redirect after 2s
    }
  }, [navigate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setError(""); // ✅ Clear error when selecting category
  };

  const handleContinue = async () => {
    setError("");
  
    if (!username.trim()) {
      setError("⚠️ Please enter your username (Firstname).");
      return;
    }
  
    if (!selectedCategory) {
      setError("⚠️ Please select a category.");
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      setError("⚠️ No token found. Please log in again.");
      navigate("/signin");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName: username }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ User verified:", data.user);
        
        // ✅ Store email in localStorage before moving to dashboard
        localStorage.setItem("email", data.user.email);
  
        navigate("/dashboard");
      } else {
        setError(data.error || "⚠️ Username not found.");
      }
    } catch (err) {
      console.error("❌ Error checking user:", err);
      setError("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="category-wrapper">
   
      {error && <p className="error-alert">{error}</p>}

      <div className="logo-container">
        <img src="/Images/Group.png" alt="Logo" />
        <h2>SPARK™</h2>
      </div>

      <div className="category-content">
        <h1>Tell us about yourself</h1>
        <p style={{ color: "grey" }}>For a personalized Spark experience</p>

        <input
          type="text"
          placeholder="Enter your username (Firstname)"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          className="input-field"
        />

        <p>Select one category that best describes your Linktree:</p>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-button ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>

        <button className="continue-button" onClick={handleContinue} disabled={loading}>
          {loading ? "Checking..." : "Continue"}
        </button>
      </div>

   
      <div className="image-container">
        <img src="/Images/signupimg.png" alt="Signin" />
      </div>
    </div>
  );
};

export default Category;
