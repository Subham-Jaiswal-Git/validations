import React, { useState } from "react";

const VoterIDForm = () => {
  const [voterID, setVoterID] = useState("");
  const [message, setMessage] = useState("");

  const validateVoterID = (value) => {
    return /^[A-Z]{3}[0-9]{7}$/.test(value);
  };
  
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    setVoterID(value);

    if (value.length > 10) {
      setMessage("❌ Voter ID cannot exceed 10 characters.");
      return;
    }

    // Validate dynamically as the user types
    if (value.length >= 1 && !/^[A-Z]*$/.test(value.substring(0, Math.min(3, value.length)))) {
      setMessage("❌ First 3 characters must be alphabets (A-Z).");
      return;
    }

    if (value.length >= 4 && !/^[0-9]*$/.test(value.substring(3, Math.min(9, value.length)))) {
      setMessage("❌ 4th to 9th characters must be digits (0-9).");
      return;
    }

    if (value.length === 10 && !/^[A-Z]$/.test(value[9])) {
      setMessage("❌ Last character must be an alphabet (A-Z).");
      return;
    }

    if (value.length === 10) {
      setMessage("✅ Voter ID is valid.");
    } else {
      setMessage("🔹 Keep typing... Voter ID should be 10 characters.");
    }
  };
  // Handle focus out (onBlur) validation
  const handleBlur = () => {
    if (voterID.length !== 10 || !/^[A-Z]{3}[0-9]{6}[A-Z]$/.test(voterID)) {
      setMessage("❌ Invalid Voter ID.");
    }
  };

  // Handle focus in (onFocus) to clear error message
  const handleFocus = () => {
    if (message === "❌ Invalid Voter ID.") {
      setMessage("🔹 Keep typing... Voter ID should be 10 characters."); // Clear the invalid message when input is focused again
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Voter ID Validation</h2>
      <label className="block text-gray-700 text-start">EPIC Number:</label>
      <input
        type="text"
        value={voterID}
        maxLength="10"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus} 
        placeholder="Enter Voter ID (e.g., ABCDE123456)"
        className="w-full p-2 border rounded text-uppercase"
        required
      />
      {message && (
        <p className={`mt-2 text-start font-bold ${message.includes("invalid") ? "text-red-500" : "text-green-500"}`}>{message}</p>
      )}
    </div>
  );
};

export default VoterIDForm;
