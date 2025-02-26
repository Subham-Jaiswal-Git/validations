import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

const Button2 = ({ className, 
    username, 
    email, 
    password, 
    checked, 
    setUsername, 
    etEmail, 
    setPassword, 
    setChecked, 
    setErrors }) => {
    const { isLoading, data, getData } = useVisitorData({ extendedResult: true }, { immediate: true });
    const [biometricAuthenticated, setBiometricAuthenticated] = useState(false);
    
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    const handleBiometricAuth = async () => {
        await getData({ ignoreCache: true }); // Fetch latest biometric data
        if (data?.visitorId) {
            setBiometricAuthenticated(true);
            toast("Biometric authentication successful");
        } else {
            toast.error("Biometric authentication failed");
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!username.trim()) newErrors.username = "Username cannot be empty";
        if (!email.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password.trim()) newErrors.password = "Password cannot be empty";
        if (!checked) newErrors.checkbox = "You must agree to continue";
        if (!biometricAuthenticated) newErrors.biometric = "Biometric authentication required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const visitorId = data?.visitorId || 'Unknown';
            
            toast(`Welcome, ${username}! Your form has been submitted successfully. Visitor ID: ${visitorId}`);
            console.log("Form submitted successfully with Visitor ID:", visitorId);
            
            setUsername("");
            setEmail("");
            setPassword("");
            setChecked(false);
            setErrors({});
            setBiometricAuthenticated(false);
        }
    };

    return (
        <>
            <button className={className} onClick={handleBiometricAuth} disabled={isLoading}>
                {isLoading ? "Loading..." : "Authenticate with Biometric"}
            </button>
            <button className={className} onClick={handleSubmit} disabled={isLoading || !biometricAuthenticated}>
                {isLoading ? "Loading..." : "Login"}
            </button>
            <Toaster />
        </>
    );
};

export default Button2;
