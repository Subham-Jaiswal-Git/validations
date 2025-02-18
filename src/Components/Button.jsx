import React from 'react';
const Button = ({className}) => {
    return (
        <div>
            <button 
                type="submit" 
                className={className}
            >
                Login
            </button>
        </div>
    );
};

export default Button;
