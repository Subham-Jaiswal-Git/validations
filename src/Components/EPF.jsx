import React, { useState } from "react";

const EPF = (props) => {
    const [epf, setEpf] = useState("");
    const [message, setMessage] = useState("");

    const validateEPF = (epf) => {
        return /^\d{22}$/.test(epf); // EPF must be exactly 22 digits
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setEpf(value);

        if (message === "❌ Invalid EPF Number.") {
            setMessage(`${props.msg1}`);
        }
        if (value.length > 0 && value.length < 22) {
            setMessage(`${props.msg2}`);
        } else if (value.length === 22) {
            setMessage(validateEPF(value) ? `${props.validMsg}` : `${props.invalidMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (epf.length !== 22 || !validateEPF(epf)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid EPF Number.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>EPF Number Validation</h2>
                <label className={`${props.labelClassName}`}>
                    EPF Number:
                </label>

                <input
                    type="text"
                    value={epf}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter EPF Number"
                    maxLength={22}
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

export default EPF;
