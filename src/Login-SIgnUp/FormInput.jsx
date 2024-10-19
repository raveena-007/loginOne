import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
