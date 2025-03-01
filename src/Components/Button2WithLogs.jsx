import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import FingerprintScanner from 'some-fingerprint-scanner-sdk'; // Replace with actual SDK for taking fingerprint
// import { FingerprintReader } from "@digitalpersona/devices"; //to capture fingerprint
// import crypto from 'crypto'; //to make hash

const Button2WithLogs = ({
    className,
    username,
    email,
    password,
    checked,
    setUsername,
    setEmail,
    setPassword,
    setChecked,
    setErrors,
}) => {
    const [fingerprintId, setFingerprintId] = useState("");
    const [deviceType] = useState("ZKTeco");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        let errors = {};
        if (!username.trim()) errors.username = "Username cannot be empty";
        if (!email.trim()) {
            errors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email format";
        }
        if (!password.trim()) errors.password = "Password cannot be empty";
        if (!checked) errors.checkbox = "You must agree to continue";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // const handleCaptureAndAuth = async () => {
    //     if (!validateForm()) {
    //         toast.error("Please fill in all required fields before capturing fingerprint.");
    //         return;
    //     }

    //     setIsProcessing(true);
    //     const capturedFingerprint = "123456";
    //     setFingerprintId(capturedFingerprint);
    //     toast.success("Fingerprint captured successfully!");

    //     try {
    //         const response = await fetch("http://localhost:5000/login-biometric", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ fingerprintId: capturedFingerprint,
    //                  deviceType,
    //                  username, 
    //                  email, 
    //                  password,
    //                 }),
    //         });
    //         const result = await response.json();

    //         if (result.success) {
    //             toast.success("Biometric login successful!");
    //             localStorage.setItem("token", result.token);
    //             if (result.user?.username) setUsername(result.user.username);
    //         } else {
    //             toast.error(result.error || "Authentication failed");
    //         }
    //     } catch (error) {
    //         console.error("Error verifying fingerprint:", error);
    //         toast.error("Error verifying fingerprint.");
    //     } finally {
    //         setIsProcessing(false);
    //     }
    // };



    // note for me -- this is not correct sdk to fetching the image and convert the img into hash need to install correct sdk
    
    const handleCaptureAndAuth = async () => {
        if (!validateForm()) {
            toast.error("Please fill in all required fields before capturing fingerprint.");
            return;
        }

        setIsProcessing(true);

        try {
            // Step 1: Capture fingerprint using the biometric device
            const fingerprintData = await FingerprintScanner.capture();
            if (!fingerprintData) {
                toast.error("Failed to capture fingerprint.");
                setIsProcessing(false);
                return;
            }

            // Step 2: Convert fingerprint data to a secure hash
            const fingerprintHash = crypto.createHash('sha256').update(fingerprintData).digest('hex');

            setFingerprintId(fingerprintHash);
            console.log(fingerprintHash);
            toast.success("Fingerprint captured successfully!");

            // Step 3: Send the hashed fingerprint to the backend for authentication
            const response = await fetch("http://localhost:5000/login-biometric", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fingerprintId: fingerprintHash,
                    deviceType,
                    username,
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Biometric login successful!");
                localStorage.setItem("token", result.token);
                if (result.user?.username) setUsername(result.user.username);
            } else {
                toast.error(result.error || "Authentication failed");
            }

        } catch (error) {
            console.error("Error verifying fingerprint:", error);
            toast.error("Error verifying fingerprint.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (validateForm()) {
            toast.success(`Welcome, ${username}! Your form has been submitted successfully.`);
            setUsername("");
            setEmail("");
            setPassword("");
            setChecked(false);
            setErrors({});
        }
        setIsLoading(false);
    };

    return (
        <>
            <button className={className} onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
            </button>
            <button className={className} onClick={handleCaptureAndAuth} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Capture & Authenticate"}
            </button>
            <Toaster />
        </>
    );
};

export default Button2WithLogs;