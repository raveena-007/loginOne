import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        {isLogin ? <LoginForm /> : <SignupForm />}
        <div className="form-footer">
          <button className="toggle-btn" onClick={toggleForm}>
            {isLogin ? "Need an account? SIGN UP" : "Already a user? LOGIN"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
