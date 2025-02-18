import React from 'react';

const Button = ({className, username, email, password, setUsername, setEmail, setPassword, setErrors ,onClick  }) => {
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
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            alert(`Welcome, ${username}! Your form has been submitted successfully.`);
            console.log("Form submitted successfully!");
            setUsername("");
            setEmail("");
            setPassword("");
            setErrors({});
        }
    };
    
    return (
            <button type="submit" className={className} onClick={onClick}> 
                Login
            </button>
    );
};

export default Button;
