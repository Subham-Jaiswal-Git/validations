import React from 'react';

const VoterIdChild = ({
    value = "",
    onChange,
    inputClassName = "",
    onErrorOccur
}) => {

    const validateVoterID = (id) => /^[A-Z]{3}[0-9]{7}$/.test(id); // Format: ABC123456D

    const handleChange = (e) => {
        const rawValue = e.target.value.toUpperCase();
        const newValue = rawValue.replace(/[^A-Z0-9]/g, "").slice(0, 10);

        onChange(newValue);

        if (rawValue !== newValue) {
            onErrorOccur("❌ Only alphabets (A-Z) and digits (0-9) are allowed.");
            return;
        }

        if (newValue.length > 10) {
            onErrorOccur("❌ Voter ID cannot exceed 10 characters.");
            return;
        }

        if (newValue.length >= 1 && !/^[A-Z]*$/.test(newValue.substring(0, Math.min(3, newValue.length)))) {
            onErrorOccur("❌ First 3 characters must be alphabets (A-Z).");
            return;
        }

        if (newValue.length >= 4 && !/^[0-9]*$/.test(newValue.substring(3, Math.min(10, newValue.length)))) {
            onErrorOccur("❌ 4th to 10th characters must be digits (0-9).");
            return;
        }

        if (newValue.length === 10) {
            onErrorOccur("✅ Voter ID is valid.");
        } else {
            onErrorOccur("🔹 Keep typing... Voter ID should be 10 characters.");
        }
    };

    const handleBlur = () => {
        if (value.length !== 10 || !validateVoterID(value)) {
            onErrorOccur("❌ Invalid Voter ID.");
        }
    };

    const handleFocus = () => {
        if (error === "❌ Invalid Voter ID.") {
            onErrorOccur("🔹 Keep typing... Voter ID should be 10 characters.");
        }
    };

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Enter Voter ID"
                maxLength={10}
                className={inputClassName}
            />
        </>
    );
};

export default VoterIdChild;