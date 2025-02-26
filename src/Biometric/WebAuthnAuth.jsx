import React, { useState } from "react";
import { startRegistration, startAuthentication } from "@simplewebauthn/browser";

const WebAuthnAuth = () => {
  const [message, setMessage] = useState("");

  // Register User (Fingerprint Enrollment)
  const registerUser = async () => {
    try {
      setMessage("Requesting registration...");

      // Fetch registration challenge from backend
      const resp = await fetch("/api/webauthn/generate-registration-options");
      const options = await resp.json();

      // Start fingerprint enrollment
      const attResp = await startRegistration(options);

      // Send response to backend for verification
      const verificationResp = await fetch("/api/webauthn/verify-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attResp),
      });

      if (verificationResp.ok) {
        setMessage("Fingerprint registered successfully!");
      } else {
        setMessage("Registration failed!");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage("Registration failed. Try again.");
    }
  };

  // Authenticate User (Fingerprint Login)
  const authenticateUser = async () => {
    try {
      setMessage("Requesting authentication...");

      // Fetch authentication challenge from backend
      const resp = await fetch("/api/webauthn/generate-authentication-options");
      const options = await resp.json();

      // Start fingerprint authentication
      const authResp = await startAuthentication(options);

      // Send response to backend for verification
      const verificationResp = await fetch("/api/webauthn/verify-authentication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authResp),
      });

      if (verificationResp.ok) {
        setMessage("Authentication successful! ✅");
      } else {
        setMessage("Authentication failed. ❌");
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      setMessage("Authentication failed. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔒 WebAuthn Fingerprint Authentication</h2>
      <button style={styles.button} onClick={registerUser}>Register Fingerprint</button>
      <button style={styles.button} onClick={authenticateUser}>Login with Fingerprint</button>
      <p>{message}</p>
    </div>
  );
};

// Simple CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default WebAuthnAuth;
