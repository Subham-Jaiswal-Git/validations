import React, { useState } from "react";

const Aadhaar = () => {
    const [aadhaar, setAadhaar] = useState("");
    const [message, setMessage] = useState("");

    const validateAadhaar = (aadhaar) => {
        return /^\d{12}$/.test(aadhaar); // Aadhaar must be exactly 12 digits
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setAadhaar(value);

        // Remove error message when user starts typing again
        if (message === "❌ Invalid Aadhaar Number.") {
            setMessage("");
        }

        if (value.length > 0 && value.length < 12) {
            setMessage("🔹 Keep typing... Aadhaar should be 12 digits.");
        } else if (value.length === 12) {
            setMessage(validateAadhaar(value) ? "✅ Valid Aadhaar Number." : "❌ Invalid Aadhaar Number.");
        } else {
            setMessage("");
        }
    };

    const handleBlur = () => {
        if (aadhaar.length !== 12 || !validateAadhaar(aadhaar)) {
            setMessage("❌ Invalid Aadhaar Number.");
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid Aadhaar Number.") {
            setMessage("🔹 Keep typing... Aadhaar should be 12 digits.");
        }
    };

    return (
        <div className="flex flex-col items-center mb-5 mt-5">
            <div className="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">AADHAAR CARD Validation</h2>
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                    Aadhaar Number:
                </label>

                <input
                    type="text"
                    value={aadhaar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter Aadhaar Number"
                    maxLength={12}
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

export default Aadhaar;
