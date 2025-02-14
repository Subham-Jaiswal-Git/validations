import React, { useState } from "react";

const NationalPopulationRegister = (props) => {
    const [npr, setNpr] = useState("");
    const [message, setMessage] = useState("");

    const validateNPR = (npr) => {
        return /^[A-Z0-9]{3}-[A-Z0-9]{4}-[A-Z0-9]{6}$/.test(npr); // NPR must follow XXX-XXXX-XXXXXX format
    };

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove non-alphanumeric characters

        // Format as XXX-XXXX-XXXXXX
        if (value.length > 3 && value.length <= 7) {
            value = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 7) {
            value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 13)}`;
        }

        setNpr(value);

        if (message === "❌ Invalid NPR Number.") {
            setMessage(`${props.msg1}`);
        }

        if (value.length > 0 && value.length < 14) {
            setMessage(`${props.msg2}`);
        } else if (value.length === 14) {
            setMessage(validateNPR(value) ? `${props.validMsg}` : `${props.invalidMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (!validateNPR(npr)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid NPR Number.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>NPR Number Validation</h2>
                <label className={`${props.labelClassName}`}>
                    NPR Number:
                </label>

                <input
                    type="text"
                    value={npr}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter NPR Number (XXX-XXXX-XXXXXX)"
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

export default NationalPopulationRegister;
