import React, { useState } from "react";
import FormInput from "./FormInput";
import "./AuthForm.css";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Handle form submission logic (e.g., API call)
      alert(`${isSignup ? "Signup" : "Login"} successful!`);
    }
  };

  return (
    <div className="form-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {isSignup && (
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <button className="toggle-btn" onClick={toggleForm}>
        {isSignup
          ? "Already have an account? Login"
          : "Don’t have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthForm;
