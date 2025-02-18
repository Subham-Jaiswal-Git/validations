import React from 'react';

const EmailInputBox2 = ({ value, className, setEmail, setErrors, validateEmail }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: value.trim() === ''
                ? "Email cannot be empty"
                : !validateEmail(value)
                    ? "Invalid email format"
                    : "",
        }));
    };
    
    return (
            <input
                type="email"
                value={value}
                onChange={handleChange}
                className={className}
                placeholder="Enter your email"
            />
    );
};

export default EmailInputBox2;
