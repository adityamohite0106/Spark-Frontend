import React, { useState } from "react";
import "../Pages/Signin.css"; // Ensure the CSS path is correct
import "/src/Mobile/MobileSignin.css"; // Ensure the CSS path is correct
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [formData, setFormData] = useState({
    identifier: "", // ✅ Can be email or username
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // ✅ Alert message state
  const [alertType, setAlertType] = useState(""); // "success" or "error"

  const navigate = useNavigate(); // ✅ To navigate after successful login

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "", // ✅ Clear errors when user starts typing
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.identifier.trim()) {
      newErrors.identifier = "Email or Username is required!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Please enter your password*";
    } else if (formData.password.length < 8) {
      newErrors.password = "The password must be at least 8 characters long*";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        console.log("🔍 Sending Signin Request:", formData);
  
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: formData.identifier.trim(),
            password: formData.password,
          }),
          credentials: "include", // ✅ Add this if needed for auth
        });
  
        const data = await response.json();
        console.log("🔍 Server Response:", data);
  
        if (response.ok) {
          console.log("🟢 Login Successful:", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.user.firstName);
          localStorage.setItem("email", data.user.email);
          setAlertMessage(`✅ Welcome, ${data.user.firstName}! Login Successful.`);
          setAlertType("success");
          setTimeout(() => {
            setAlertMessage("");
            navigate("/category");
          }, 2000);
        } else {
          console.error("🛑 Login Failed:", data.error);
          setAlertMessage(`❌ ${data.error || "Invalid credentials. Please try again."}`);
          setAlertType("error");
          setTimeout(() => {
            setAlertMessage("");
          }, 3000);
        }
      } catch (error) {
        console.error("❌ Network/CORS Error:", error.message); // ✅ Better error logging
        setAlertMessage("⚠️ Server error! Please try again later.");
        setAlertType("error");
        setTimeout(() => {
          setAlertMessage("");
        }, 3000);
      }
    } else {
      console.log("🛑 Validation Errors", errors);
    }
  };
  
  
  

// fetch user profile data


  return (
    <div className="signin-container">
      {/* ✅ Custom Green/Red Alert Box */}
      {alertMessage && (
  <div className={`alert-box ${alertType === "success" ? "success" : "error"}`}>
    {alertMessage}
  </div>
)}


      <div className="logo2">
        <img src="/Images/Group.png" alt="Logo" />
        SPARK™
      </div>

      <div className="signin-left">
        <div className="signin-box">
          <h1 className="signin-title">Sign in to your Spark</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="identifier"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="Enter email or username"
              />
              {errors.identifier && <small className="error-text">{errors.identifier}</small>}
            </div>

            <div className="input-group">
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <small className="error-text">{errors.password}</small>}
            </div>

            <button type="submit" className="signin-btn2">
              Log in
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </div>

        <p className="recaptcha-text">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
        </p>
      </div>

      <div className="signin-right">
        <img src="/Images/signupimg.png" alt="Signin" />
      </div>
    </div>
  );
};

export default Signin;
