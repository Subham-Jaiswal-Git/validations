import React, { useState } from "react";

const Gst = () => {
    const [gstin, setGstin] = useState("");
    const [message, setMessage] = useState("");

    // List of valid state codes in India (01-35)
    const validStateCodes = new Set([
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
        "31", "32", "33", "34", "35"
    ]);

    const validateGSTIN = (gstin) => {
        if (gstin.length !== 15) return false;

        const stateCode = gstin.substring(0, 2);
        if (!validStateCodes.has(stateCode)) return false;

        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$/;
        return gstRegex.test(gstin);
    };

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase();
        setGstin(value);
    
        // Remove error message when user starts typing again
        if (message === "❌ Invalid GSTIN.") {
            setMessage("");
        }
    
        // Validate dynamically while typing
        if (value.length > 15) {
            setMessage("❌ GSTIN cannot exceed 15 characters.");
            return;
        }
    
        if (value.length >= 1 && value.length < 3 && !/^[0-9]*$/.test(value.substring(0, value.length))) {
            setMessage("❌ First 2 characters must be digits (State Code: 01-35).");
            return;
        }
    
        if (value.length >= 2) {
            const stateCode = parseInt(value.substring(0, 2), 10);
            if (isNaN(stateCode) || stateCode < 1 || stateCode > 35) {
                setMessage("❌ First two digits must be between 01 and 35 (Valid State Code).");
                return;
            }
        }
    
        if (value.length >= 3 && value.length < 8 && !/^[A-Z]*$/.test(value.substring(2, value.length))) {
            setMessage("❌ 3rd to 7th characters must be alphabets (PAN Format).");
            return;
        }
    
        if (value.length >= 8 && value.length < 12 && !/^[0-9]*$/.test(value.substring(7, value.length))) {
            setMessage("❌ 8th to 11th characters must be digits.");
            return;
        }
    
        if (value.length === 13 && !/^[0-9]$/.test(value[12])) {
            setMessage("❌ 13th character must be an numeric value.");
            return;
        }
    
        if (value.length === 14 && !/^[Z]$/.test(value[13])) {
            setMessage("❌ 14th character must be an alphabet (Z) by default.");
            return;
        }
    
        // Final GSTIN format check when full 15 characters are entered
        if (value.length === 15) {
            setMessage(validateGSTIN(value) ? "✅ Valid GSTIN." : "❌ Invalid GSTIN.");
        } else {
            setMessage("🔹 Keep typing... GSTIN should be 15 characters.");
        }
    };
    
    const handleBlur = () => {
        if (gstin.length !== 15 || !validateGSTIN(gstin)) {
            setMessage("❌ Invalid GSTIN.");
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid GSTIN.") {
            setMessage("Keep typing");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">GSTIN Validation</h2>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start">GSTIN:</label>

                <input
                    type="text"
                    value={gstin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter GSTIN"
                    maxLength={15}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />

                {message && (
                    <p className={`mt-2 text-start text-sm font-semibold ${message.includes("❌") ? "text-red-600" : "text-green-600"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Gst;
