import React, { useState } from "react";

const ESIC = (props) => {
    const [esic, setEsic] = useState("");
    const [message, setMessage] = useState("");

    const validateESIC = (esic) => {
        return /^\d{17}$/.test(esic); // ESIC must be exactly 17 digits
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setEsic(value);

        // Remove error message when user starts typing again
        if (message === "❌ Invalid ESIC Number.") {
            setMessage( `${props.msg1}`);
        }
        if (value.length > 0 && value.length < 17) {
            setMessage(`${props.msg2}`);
        } else if (value.length === 17) {
            setMessage(validateESIC(value) ? `${props.validMsg}` : `${props.invalidMsg}`);
        } else {
            setMessage(`${props.formatMsg}`);
        }
    };

    const handleBlur = () => {
        if (esic.length !== 17 || !validateESIC(esic)) {
            setMessage(`${props.handleBlur}`);
        }
    };

    const handleFocus = () => {
        if (message === "❌ Invalid ESIC Number.") {
            setMessage(`${props.handleFocus}`);
        }
    };

    return (
        <div className={`${props.div1ClassName}`}>
            <div className={`${props.div2ClassName}`}>
                <h2 className={`${props.h2ClassName}`}>ESIC Number Validation</h2>
                <label className={`${props.labelClassName}`}>
                    ESIC Number:
                </label>

                <input
                    type="text"
                    value={esic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter ESIC Number"
                    maxLength={17}
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

export default ESIC;