import React, { useState } from "react";

const FinancialTaxation = (props) => {
    const [document, setDocument] = useState("");
    const [message, setMessage] = useState("");

    const validateDocument = (document) => {
        return /^[A-Z]{5}\d{4}[A-Z]$/.test(document); // Example: PAN card format (AAAAA1234A)
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove non-alphanumeric characters
        
        setDocument(value);

        if (message === "❌ Invalid Document Number.") {
            setMessage(`${props.msg1}`);
        }

        if (value.length > 0 && value.length < 10) {
            setMessage(`${props.msg2}`);
        } else if (value.length === 10) {
            setMessage(validateDocument(value) ? `${props.validMsg}` : `${props.invalidMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (!validateDocument(document)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid Document Number.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>Financial & Taxation Document Validation</h2>
                <label className={`${props.labelClassName}`}>
                    Document Number:
                </label>

                <input
                    type="text"
                    value={document}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter Document Number (AAAAA1234A)"
                    maxLength={10}
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

export default FinancialTaxation;
