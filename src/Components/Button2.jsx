import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const Button2 = ({
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
    const { isLoading, data } = useVisitorData({ extendedResult: true }, { immediate: true });
    const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
    const [biometricAuthenticated, setBiometricAuthenticated] = useState(false);
    const [fingerprintImage, setFingerprintImage] = useState(null);
    const [visitorId, setVisitorId] = useState(null);

    // Validate Email Format
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // 🔹 Capture Fingerprint using FingerprintJS API
    const handleCaptureFingerprint = async () => {
        try {
            const fp = await FingerprintJS.load({ token: "0R0wNbdOw7MgkGkUouQH" });
            const result = await fp.get();
            setVisitorId(result.visitorId);
            setFingerprintCaptured(true);
            toast.success("Fingerprint captured successfully!");
        } catch (error) {
            console.error("Error capturing fingerprint:", error);
            toast.error("Error capturing fingerprint.");
        }
    };

    // 🔹 Handle Biometric Authentication (Verify Fingerprint)
    const handleBiometricAuth = async () => {
        if (!fingerprintCaptured) {
            toast.error("Please capture your fingerprint first.");
            return;
        }
        
        try {
            const response = await fetch("http://localhost:5000/fingerprint/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ visitorId }),
            });
            const result = await response.json();

            if (result.status === "success") {
                setBiometricAuthenticated(true);
                toast.success("Biometric authentication successful!");
            } else {
                toast.error("Fingerprint does not match. Access denied.");
            }
        } catch (error) {
            console.error("Error verifying fingerprint:", error);
            toast.error("Error verifying fingerprint.");
        }
    };

    // 🔹 Handle Form Submission
    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
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
            toast(`Welcome, ${username}! Your form has been submitted successfully.`);
            console.log("Form submitted successfully");
            
            setUsername("");
            setEmail("");
            setPassword("");
            setChecked(false);
            setErrors({});
            setBiometricAuthenticated(false);
            setFingerprintCaptured(false);
            setFingerprintImage(null);
        }
    };

    return (
        <>
            <button className={className} onClick={handleCaptureFingerprint} disabled={fingerprintCaptured}>
                {fingerprintCaptured ? "Fingerprint Captured" : "Capture Fingerprint"}
            </button>
            
            {fingerprintImage && (
                <div>
                    <h3>Captured Fingerprint:</h3>
                    <img src={`data:image/png;base64,${fingerprintImage}`} alt="Fingerprint" width={200} />
                </div>
            )}
            
            <button className={className} onClick={handleBiometricAuth} disabled={isLoading}>
                {isLoading ? "Loading..." : "Authenticate with Biometric"}
            </button>

            <button className={className} onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
            </button>
            
            <Toaster />
        </>
    );
};

export default Button2;
