import React from "react";

const Pan = ({
  value = "",
  onChange,
  className = "",
  inputClassName = "",
  error = "",
  onErrorOccur
}) => {

  const validatePan = (id) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(id);

  const handleChange = (e) => {
    const rawValue = e.target.value.toUpperCase();
    const newValue = rawValue.replace(/[^A-Z0-9]/g, "").slice(0, 10);

    onChange(newValue);

    if (rawValue !== newValue) {
      onErrorOccur("❌ Only alphabets (A-Z) and digits (0-9) are allowed.");
      return;
    }

    if (newValue.length > 10) {
      onErrorOccur("❌ PAN Number cannot exceed 10 characters.");
      return;
    }

    if (newValue.length >= 1 && !/^[A-Z]*$/.test(newValue.substring(0, Math.min(5, newValue.length)))) {
      onErrorOccur("❌ First 5 characters must be alphabets (A-Z). ");
      return;
    }

    if (newValue.length >= 6 && !/^[0-9]*$/.test(newValue.substring(5, Math.min(9, newValue.length)))) {
      onErrorOccur("❌ 6th to 9th characters must be digits (0-9).");
      return;
    }

    if (newValue.length === 10 && !/^[A-Z]$/.test(newValue[9])) {
      onErrorOccur("❌ Last character must be an alphabet (A-Z). ");
      return;
    }

    if (newValue.length === 10) {
      onErrorOccur("✅ PAN number is valid.");
    } else {
      onErrorOccur("🔹 Keep typing... PAN should be 10 characters.");
    }
  };

  const handleBlur = () => {
    if (value.length !== 10 || !validatePan(value)) {
      onErrorOccur("❌ Invalid PAN Number.");
    }
  };

  const handleFocus = () => {
    if (error === "❌ Invalid PAN Number.") {
      onErrorOccur("🔹 Keep typing... PAN should be 10 characters.");
    }
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter PAN Number"
        maxLength={10}
        className={inputClassName}
      />
      {error && (
        <p className={`mt-2 text-sm ${error.includes("❌") ? "text-red-600" : "text-green-600"}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Pan;
