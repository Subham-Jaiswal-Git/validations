import React from 'react';

const PasswordInputBox2 = ({ value, className, setPassword, setErrors }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: value.trim() === '' ? "Password cannot be empty" : '',
        }));
    };

    return (
        <input
            type="password"
            value={value}
            onChange={handleChange}
            className={className}
            placeholder="Enter your password"
        />
    );
};

export default PasswordInputBox2;
