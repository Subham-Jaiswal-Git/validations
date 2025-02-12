import React, { useState } from "react";

const DL = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [message, setMessage] = useState("");

  const validateDLNumber = (dl) => {
    return /^[A-Z]{2}\d{2}\s\d{4}\s\d{7}$/.test(dl);
  };

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    setLicenseNumber(value);

    if (value.length > 16) {
      setMessage("❌ DL Number cannot exceed 16 characters.");
      return;
    }

    // Validate dynamically while typing
    if (value.length >= 1 && !/^[A-Z]*$/.test(value.substring(0, Math.min(2, value.length)))) {
      setMessage("❌ First 2 characters must be alphabets (State Code).");
      return;
    }

    if (value.length >= 3 && !/^[0-9]*$/.test(value.substring(2, Math.min(4, value.length)))) {
      setMessage("❌ 3rd & 4th characters must be digits (RTO Code).");
      return;
    }

    if (value.length >= 5 && !/^[0-9- ]*$/.test(value.substring(4, value.length))) {
      setMessage("❌ The remaining characters must be digits, '-' or space.");
      return;
    }

    // Regex for complete valid DL number format
    const dlPattern = /^[A-Z]{2}[0-9]{2}[- ]?[0-9]{7,8}$/;

    if (dlPattern.test(value)) {
      setMessage("✅ Valid DL Number.");
    } else {
      setMessage("🔹 Keep typing... Follow format: AA-12-12345678");
    }
  };

  const handleBlur = () => {
    if (licenseNumber.length < 10 || !/^[A-Z]{2}[0-9]{2}[- ]?[0-9]{7,8}$/.test(licenseNumber)) {
      setMessage("❌ Invalid DL Number.");
    }
  };

  // Handle focus in (onFocus) to clear error message
  const handleFocus = () => {
    if (message === "❌ Invalid DL Number.") {
      setMessage("🔹 Keep typing... Follow format: AA-12-12345678"); // Clear the invalid message when input is focused again
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Driving License Validation</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-start">License Number:</label>
        <input
          type="text"
          name="licenseNumber"
          value={licenseNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="w-full p-2 border rounded"
          placeholder="AB12 1234 1234567"
          required
        />
        {message && <p className={`mt-2 text-start ${message.includes("Invalid") ? "text-red-500 " : "text-green-500"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default DL;
