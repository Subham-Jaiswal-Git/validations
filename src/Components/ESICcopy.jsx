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



// This is for parent component 

{/* <ESIC  
        msg1=" "
        msg2="🔹 Keep typing... ESIC should be 17 digits."
        validMsg="✅ Valid ESIC Number."
        invalidMsg="❌ Invalid ESIC Number."
        formatMsg="Its should be 17 digit numeric value"
        handleBlur="❌ Invalid ESIC Number."
        handleFocus="🔹 Keep typing... ESIC should be 17 digits."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg "
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />  */}