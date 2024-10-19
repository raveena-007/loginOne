import React, { useState } from "react";
import "./AuthForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic
    alert("Login successful!");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>LOGIN...</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        LOGIN
      </button>
      <a href="/" className="forgot-link">
        Forgot Password?
      </a>
      <div className="social-login">
        <p>OR</p>
      </div>
    </form>
  );
};

export default LoginForm;
