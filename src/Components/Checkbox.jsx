import React from 'react';

const Checkbox = ({ checked, className, setChecked, label }) => {
    const handleChange = (e) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);
    };

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className={className}
            />
            <label className="ml-2 text-sm text-gray-700">{label}</label>
        </div>
    );
};

export default Checkbox;
