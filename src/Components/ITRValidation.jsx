import React, { useState } from "react";

const ITRValidation = (props) => {
    const [itr, setItr] = useState("");
    const [message, setMessage] = useState("");

    const validateITR = (itr) => {
        return /^ITR-[1-7]$/.test(itr); // Valid formats: ITR-1, ITR-2, ..., ITR-7
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, ""); // Remove invalid characters
        setItr(value);

        if (message === "❌ Invalid ITR Form.") {
            setMessage(`${props.msg1}`);
        }

        if (value.length > 0 && !validateITR(value)) {
            setMessage(`${props.msg2}`);
        } else if (validateITR(value)) {
            setMessage(`${props.validMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (!validateITR(itr)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid ITR Form.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>Income Tax Return (ITR) Validation</h2>
                <label className={`${props.labelClassName}`}>
                    ITR Form:
                </label>

                <input
                    type="text"
                    value={itr}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter ITR Form (e.g., ITR-1)"
                    maxLength={6}
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

export default ITRValidation;
