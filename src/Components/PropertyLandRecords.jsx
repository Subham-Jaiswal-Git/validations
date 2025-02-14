import React, { useState } from "react";

const PropertyLandRecords = (props) => {
    const [recordId, setRecordId] = useState("");
    const [message, setMessage] = useState("");

    const validateRecordId = (recordId) => {
        return /^[A-Z0-9]{4}-\d{4}-\d{5}$/.test(recordId); // Example: ABCD-1234-56789
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

        // Format as ABCD-1234-56789
        if (value.length > 4 && value.length <= 8) {
            value = `${value.slice(0, 4)}-${value.slice(4)}`;
        } else if (value.length > 8) {
            value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8, 13)}`;
        }

        setRecordId(value);

        if (message === "❌ Invalid Record ID.") {
            setMessage(`${props.msg1}`);
        }

        if (value.length > 0 && !validateRecordId(value)) {
            setMessage(`${props.msg2}`);
        } else if (validateRecordId(value)) {
            setMessage(`${props.validMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (!validateRecordId(recordId)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid Record ID.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>Property & Land Records Validation</h2>
                <label className={`${props.labelClassName}`}>
                    Record ID:
                </label>

                <input
                    type="text"
                    value={recordId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter Record ID (e.g., ABCD-1234-56789)"
                    maxLength={14}
                    className={`${props.inputClassName}`}
                />
                {message && (
                    <p className={`mt-2 text-sm font-semibold ${message.includes("❌") ? "text-red-600" : "text-green-600"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PropertyLandRecords;
