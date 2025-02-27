import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Capture Fingerprint (Mocked for now)
    const handleCaptureFingerprint = () => {
        setFingerprintId("123456"); // Replace with actual device capture logic
        toast.success("Fingerprint captured successfully!");
    };

    // Authenticate with Biometric (Backend API Call)
    const handleBiometricAuth = async () => {
        if (!fingerprintId) return toast.error("Please capture your fingerprint first.");

        setIsAuthenticating(true);
        try {
            const response = await fetch("http://localhost:5000/login-biometric", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fingerprintId, deviceType }),
            });
            const result = await response.json();

            if (result.success) {
                toast.success("Biometric login successful!");
                localStorage.setItem("token", result.token);
                setUsername(result.user.username);
            } else {
                toast.error(result.error || "Authentication failed");
            }
        } catch (error) {
            console.error("Error verifying fingerprint:", error);
            toast.error("Error verifying fingerprint.");
        } finally {
            setIsAuthenticating(false);
        }
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let newErrors = {};
        if (!username.trim()) newErrors.username = "Username cannot be empty";
        if (!email.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password.trim()) newErrors.password = "Password cannot be empty";
        if (!checked) newErrors.checkbox = "You must agree to continue";

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
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
            <button className={className} onClick={handleCaptureFingerprint} disabled={!!fingerprintId}>
                {fingerprintId ? "Fingerprint Captured" : "Capture Fingerprint"}
            </button>
            <button className={className} onClick={handleBiometricAuth} disabled={isAuthenticating || !fingerprintId}>
                {isAuthenticating ? "Authenticating..." : "Login with Biometric"}
            </button>
            <Toaster />
        </>
    );
};

export default Button2WithLogs;
