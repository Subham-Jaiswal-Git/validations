import React from 'react';

const UsernameInputBox = ({ value, className, onChange, onErrorExist }) => {
    return (

        <input
            type="text"
            value={value}
            onChange={onChange}
            className={className}
            placeholder="Enter your username"
            onBlur={() => onErrorExist('Username')}
        />


    );
};
export default UsernameInputBox;