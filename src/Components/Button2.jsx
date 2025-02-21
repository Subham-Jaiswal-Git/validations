import React from 'react';

const Button = ({ className, username, email, password, checked, setUsername, setEmail, setPassword, setChecked, setErrors }) => {
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newErrors = {};

    //     if (!username.trim()) newErrors.username = "Username cannot be empty";
    //     if (!email.trim()) {
    //         newErrors.email = "Email cannot be empty";
    //     } else if (!validateEmail(email)) {
    //         newErrors.email = "Invalid email format";
    //     }
    //     if (!password.trim()) newErrors.password = "Password cannot be empty";

    //     setErrors(newErrors);

    //     if (Object.keys(newErrors).length === 0) {
    //         alert(`Welcome, ${username}! Your form has been submitted successfully.`);
    //         console.log("Form submitted successfully!");
    //         setUsername("");
    //         setEmail("");
    //         setPassword("");
    //         setErrors({});
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!username.trim()) newErrors.username = "Username cannot be empty";

        if (!email.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password.trim()) newErrors.password = "Password cannot be empty";

        if (!checked) {
            newErrors.checkbox = "You must agree to continue";
        }


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(`Welcome, ${username}! Your form has been submitted successfully.`);
            console.log("Form submitted successfully!");
            setUsername("");
            setEmail("");
            setPassword("");
            setChecked(false);
            setErrors({});
        }

        e.preventDefault();

        if (!checked) {
            newErrors.checkbox = "You must agree to continue";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <button  className={className} onClick={handleSubmit}>Login</button>
    );
};

export default Button;


