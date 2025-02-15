import React from "react";

const ESIC = ({
    value = "",
    onChange,
    className = "",
    inputClassName = "",
    error = "",
    onErrorOccur
}) => {

    const validateESIC = (esic) => /^\d{17}$/.test(esic); // ESIC must be exactly 17 digits

    const handleChange = (e) => {
        const rawValue = e.target.value;
        const newValue = rawValue.replace(/\D/g, "").slice(0, 17);

        onChange(newValue);

        if (rawValue !== newValue) {
            onErrorOccur("❌ Only numeric values are allowed.");
            return;
        }

        if (!newValue) {
            onErrorOccur("");
            return;
        }

        if (newValue.length < 17) {
            onErrorOccur("🔹 Keep typing... ESIC should be 17 digits.");
        } else {
            onErrorOccur(validateESIC(newValue) ? "✅ Valid ESIC Number." : "❌ Invalid ESIC Number.");
        }
    };

    const handleBlur = () => {
        if (value.length !== 17 || !validateESIC(value)) {
            onErrorOccur("❌ Invalid ESIC Number.");
        }
    };

    const handleFocus = () => {
        if (error === "❌ Invalid ESIC Number.") {
            onErrorOccur("🔹 Keep typing... ESIC should be 17 digits.");
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
                placeholder="Enter ESIC Number"
                maxLength={17}
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

export default ESIC;
