import React from 'react';

const PasswordInputBox = ({ value, className, onChange, onErrorExist }) => {
    return (
        <input
            type="password"
            value={value}
            onChange={onChange}
            className={className}
            placeholder="Enter your password"
            onBlur={() => onErrorExist('Password')}
        />
    );
};

export default PasswordInputBox;
