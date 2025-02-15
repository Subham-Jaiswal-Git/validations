import React from "react";

const DL = ({
  value = "",
  onChange,
  className = "",
  inputClassName = "",
  error = "",
  onErrorOccur
}) => {
  const validateDL = (dl) => /^[A-Z]{2}\d{2}\d{4}\d{7}$/.test(dl);

  const handleChange = (e) => {
    const rawValue = e.target.value.toUpperCase();
    const newValue = rawValue.replace(/[^A-Z0-9]/g, "").slice(0, 15); // Allow only alphanumeric characters & limit length

    onChange(newValue);

    if (rawValue !== newValue) {
      onErrorOccur("❌ Only alphabets (A-Z) and digits (0-9) are allowed.");
      return;
    }

    if (newValue.length > 15) {
      onErrorOccur("❌ DL Number cannot exceed 15 characters.");
      return;
    }

    if (newValue.length >= 1 && !/^[A-Z]*$/.test(newValue.substring(0, Math.min(2, newValue.length)))) {
      onErrorOccur("❌ First 2 characters must be alphabets (State Code).");
      return;
    }

    if (newValue.length >= 3 && !/^[0-9]*$/.test(newValue.substring(2, Math.min(4, newValue.length)))) {
      onErrorOccur("❌ 3rd & 4th characters must be digits (RTO Code).");
      return;
    }

    if (newValue.length >= 5 && !/^[0-9]*$/.test(newValue.substring(4, newValue.length))) {
      onErrorOccur("❌ The remaining characters must be digits.");
      return;
    }

    if (validateDL(newValue)) {
      onErrorOccur("✅ Valid DL Number.");
    } else {
      onErrorOccur("🔹 Keep typing... Follow format: AA1212341234567");
    }
  };

  const handleBlur = () => {
    if (value.length < 10 || !validateDL(value)) {
      onErrorOccur("❌ Invalid DL Number.");
    }
  };

  const handleFocus = () => {
    if (error === "❌ Invalid DL Number.") {
      onErrorOccur("🔹 Keep typing... Follow format: AA1212341234567");
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
        placeholder="Enter DL Number"
        maxLength={15}
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

export default DL;
