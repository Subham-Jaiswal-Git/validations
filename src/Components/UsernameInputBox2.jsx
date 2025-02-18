import React from 'react';

const UsernameInputBox2 = ({ value, className, setUsername, setErrors }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            username: value.trim() === '' ? "Username cannot be empty" : '',
        }));
    };
    
    return (
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className={className}
                placeholder="Enter your username"
            />
    );
};

export default UsernameInputBox2;
