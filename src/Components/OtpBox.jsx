import React, { useState, useRef } from "react";

const OtpBox = ({ name = "otp", length = 6, className = "", onChange, value = "" }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/, ""); // Allow only numbers

    const newOtp = value.split(""); // Convert value to an array
    newOtp[index] = val;

    const otpValue = newOtp.join(""); // Convert back to string
    onChange(otpValue); // Update parent component

    // Move to next input if value is entered
    if (index < length - 1 && val) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {[...Array(length)].map((_, index) => (
        <input
          type="text"
          name={`${name}-${index}`} // Unique name for each input
          value={value[index] || ""}
          maxLength="1"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className={`${className}`}
          key={index}
        />
      ))}
    </>
  );
};

export default OtpBox;
