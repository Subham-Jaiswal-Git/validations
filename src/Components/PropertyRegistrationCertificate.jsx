import React, { useState } from "react";

const PropertyRegistrationCertificate = (props) => {
    const [certificate, setCertificate] = useState("");
    const [message, setMessage] = useState("");

    const validateCertificate = (certificate) => {
        return /^PRC-\d{4}-\d{6}$/.test(certificate); // Format: PRC-YYYY-NNNNNN
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

        // Auto-format as PRC-YYYY-NNNNNN
        if (value.length > 3 && value.length <= 7) {
            value = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 7) {
            value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 13)}`;
        }

        setCertificate(value);

        if (message === "❌ Invalid Certificate Number.") {
            setMessage(`${props.msg1}`);
        }

        if (value.length > 0 && !validateCertificate(value)) {
            setMessage(`${props.msg2}`);
        } else if (validateCertificate(value)) {
            setMessage(`${props.validMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (!validateCertificate(certificate)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid Certificate Number.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>Property Registration Certificate Validation</h2>
                <label className={`${props.labelClassName}`}>
                    Certificate Number:
                </label>

                <input
                    type="text"
                    value={certificate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter Certificate No (PRC-YYYY-NNNNNN)"
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

export default PropertyRegistrationCertificate;
