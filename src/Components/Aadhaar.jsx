import React from "react";

const Aadhaar = ({
  value = "",
  onChange,
  className = "",
  inputClassName = "",
  error = "",
  onErrorOccur
}) => {
  const validateAadhaar = (aadhaar) => /^\d{4}\d{4}\d{4}$/.test(aadhaar);

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const newValue = rawValue.slice(0, 12); // Aadhaar should have a max length of 12 digits

    onChange(newValue);

    if (rawValue !== newValue) {
      onErrorOccur("❌ Only digits (0-9) are allowed.");
      return;
    }

    if (newValue.length > 12) {
      onErrorOccur("❌ Aadhaar Number cannot exceed 12 digits.");
      return;
    }

    if (newValue.length > 0 && newValue.length < 12) {
      onErrorOccur("🔹 Keep typing... Aadhaar should be 12 digits.");
      return;
    }

    if (validateAadhaar(newValue)) {
      onErrorOccur("✅ Valid Aadhaar Number.");
    } else {
      onErrorOccur("only numeric value allow");
    }
  };

  const handleBlur = () => {
    if (value.length !== 12 || !validateAadhaar(value)) {
      onErrorOccur("❌ Invalid Aadhaar Number.");
    }
  };

  const handleFocus = () => {
    if (error === "❌ Invalid Aadhaar Number.") {
      onErrorOccur("🔹 Keep typing... Follow format: 123412341234");
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
        placeholder="Enter Aadhaar Number"
        maxLength={12}
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

export default Aadhaar;
