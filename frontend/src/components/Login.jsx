import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ban from "../assets/ads.png"; 

const Login = () => {
  const navigate = useNavigate(); 
  const [mobileNumber, setMobileNumber] = useState("");
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setMobileNumber(input);
    }
  };

  return (
    <div className="login-container">
      <div className="banner">
        <img src={ban} alt="Banner" className="banner-image" />
      </div>
      <div className="login-box">
        <h2>
          <strong>Login</strong> or <strong>Signup</strong>
        </h2>
        <div className="input-container">
          <span className="country-code">+91</span>
          <input type="text" placeholder="Enter your mobile number" className="input-field"
            value={mobileNumber} onChange={handleInputChange} maxLength={10} />
        </div>
        <p className="terms"> By continuing, I agree to the{" "}
          <span className="highlight link" onClick={() => handleNavigation("/term")}>Terms of Use</span>{" "}&{" "}
          <span className="highlight link" onClick={() => handleNavigation("/nice")}> Privacy Policy</span>
        </p>
        <button className="continue-button">CONTINUE</button>
        <p className="help-text">Have trouble logging in?{" "}
          <span className="highlight link" onClick={() => handleNavigation("/help")} >Get help</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
