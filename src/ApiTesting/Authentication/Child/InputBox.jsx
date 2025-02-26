import React from "react";

const InputBox = ({ label, type, name, value, handleChange, validate, error }) => {
    return (
        <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className={`border block w-full rounded-md px-3 py-1.5 text-base text-gray-900 ${
                    error ? "border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder={`Enter ${label.toLowerCase()}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputBox;
