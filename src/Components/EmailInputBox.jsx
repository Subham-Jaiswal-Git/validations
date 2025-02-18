import React from 'react';

const EmailInputBox = ({ value, className, onChange, onErrorExist }) => {

    return (

        <input
            type="email"
            value={value}
            onChange={onChange}
            className={className}
            placeholder="Enter your email"
            onBlur={() => onErrorExist('Email')}
        />

    );
};

export default EmailInputBox;
