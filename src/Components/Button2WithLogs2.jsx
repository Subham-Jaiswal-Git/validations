import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import API_BASE_URL from "../config";

const Button2WithLogs = ({ className }) => {
    const [fingerprintId, setFingerprintId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [biometricAuthenticated, setBiometricAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Handle API calls
    const handleApiCall = async (apiEndpoint, data = {}) => {
        try {
            setLoading(true);
            const response = await axios.post(`${API_BASE_URL}/${apiEndpoint}`, data);
            return response.data;
        } catch (error) {
            console.error(`Error in ${apiEndpoint}:`, error);
            toast.error(`Error in ${apiEndpoint}.`);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Capture Fingerprint
    const handleCaptureFingerprint = async () => {
        const fakeFingerprintId = Math.floor(1000 + Math.random() * 9000).toString();
        setFingerprintId(fakeFingerprintId);
        toast.success(`Fingerprint Captured! ID: ${fakeFingerprintId}`);
    };

    // Biometric Authentication
    const handleBiometricAuth = async () => {
        if (!fingerprintId) return toast.error("Capture fingerprint first.");
        
        const data = await handleApiCall("login-biometric", { fingerprintId });
        if (data?.success) {
            setBiometricAuthenticated(true);
            setUser(data.user);
            localStorage.setItem("token", data.token);
            toast.success("Biometric authentication successful!");
        } else {
            toast.error("Fingerprint not recognized.");
        }
    };

    // Handle Login Submission
    const handleSubmit = () => {
        if (!biometricAuthenticated) return toast.error("Complete biometric authentication first.");
        toast.success(`Welcome, ${user?.username}!`);
    };

    return (
        <>
            <button className={className} onClick={handleCaptureFingerprint} disabled={!!fingerprintId || loading}>
                {fingerprintId ? "Fingerprint Captured" : "Capture Fingerprint"}
            </button>

            <button className={className} onClick={handleBiometricAuth} disabled={!fingerprintId || loading}>
                {loading ? "Authenticating..." : "Authenticate with Biometric"}
            </button>

            <button className={className} onClick={handleSubmit} disabled={!biometricAuthenticated || loading}>
                {loading ? "Logging in..." : "Login"}
            </button>

            {biometricAuthenticated && user && <p>Welcome, {user.username}!</p>}

            <Toaster />
        </>
    );
};

export default Button2WithLogs;
