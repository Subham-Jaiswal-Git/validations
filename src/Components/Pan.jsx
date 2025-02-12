import React, { useState } from "react";

const Pan = () => {
  const [pan, setPan] = useState("");
  const [message, setMessage] = useState("");

  const validatePan = (value) => {
    return /^[A-Z]{3}[PCHFAT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    setPan(value);

    if (value.length > 10) {
      setMessage("❌ PAN Number cannot exceed 10 characters.");
      return;
    }

    // Validate each part dynamically while typing
    if (value.length >= 1 && !/^[A-Z]*$/.test(value.substring(0, Math.min(5, value.length)))) {
      setMessage("❌ First 5 characters must be alphabets (A-Z).");
      return;
    }

    if (value.length >= 6 && !/^[0-9]*$/.test(value.substring(5, Math.min(9, value.length)))) {
      setMessage("❌ 6th to 9th characters must be digits (0-9).");
      return;
    }

    if (value.length === 10 && !/^[A-Z]$/.test(value[9])) {
      setMessage("❌ Last character must be an alphabet (A-Z).");
      return;
    }

    if (value.length === 10) {
      setMessage("✅ PAN number is valid.");
    } else {
      setMessage("🔹 Keep typing... PAN should be 10 characters.");
    }
  };

  // Handle focus out (onBlur) validation
  const handleBlur = () => {
    if (pan.length !== 10 || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      setMessage("❌ Invalid PAN Number.");
    }
  };

  const handleFocus = () => {
    if (message === "❌ Invalid PAN Number.") {
      setMessage("🔹 Keep typing... PAN should be 10 characters."); // Clear the invalid message when input is focused again
    }
  };

  return (
    <div className="max-w-md mt-5 mx-auto p-6 bg-white rounded-xl shadow-md text-center mb-5">
      <h2 className="text-xl font-semibold mb-4">PAN Card Validation</h2>
      <label className="block text-gray-700 text-start">PAN Number:</label>
      <input
        type="text"
        value={pan}
        maxLength="10"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter PAN (e.g., ABCDE1234F)"
        className="w-full p-2 border rounded text-uppercase"
        required
      />
      {message && (
        <p className={`mt-2 text-start font-bold ${message.includes("invalid") ? "text-red-500" : "text-green-500"}`}>{message}</p>
      )}
    </div>
  );
};

export default Pan;
