import React, { useState } from "react";

const EncumbranceCertificate = (props) => {
    const [certificate, setCertificate] = useState("");
    const [message, setMessage] = useState("");

    const validateCertificate = (certificate) => {
        return /^EC-\d{4}-\d{6}$/.test(certificate); // Format: EC-YYYY-NNNNNN
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters

        // Auto-format as EC-YYYY-NNNNNN
        if (value.length > 2 && value.length <= 6) {
            value = `${value.slice(0, 2)}-${value.slice(2)}`;
        } else if (value.length > 6) {
            value = `${value.slice(0, 2)}-${value.slice(2, 6)}-${value.slice(6, 12)}`;
        }

        setCertificate(value);

        if (message === "❌ Invalid Certificate Number.") {
            setMessage(props.msg1);
        }

        if (value.length > 0 && !validateCertificate(value)) {
            setMessage(props.msg2);
        } else if (validateCertificate(value)) {
            setMessage(props.validMsg);
        } else {
            setMessage(props.formatMsg);
        }
    };

    const handleBlur = () => {
        if (!validateCertificate(certificate)) {
            setMessage(props.handleBlur);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid Certificate Number.") {
            setMessage(props.handleFocus);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>Encumbrance Certificate Validation</h2>
                <label className={`${props.labelClassName}`}>
                    Certificate Number:
                </label>

                <input
                    type="text"
                    value={certificate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter Certificate No (EC-YYYY-NNNNNN)"
                    maxLength={13}
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

export default EncumbranceCertificate;
