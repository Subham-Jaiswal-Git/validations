import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, OAuthProvider } from "firebase/auth";
import PasswordInputBox from "../Components/PasswordInputBox";
import EmailInputBox from "../Components/EmailInputBox";
import Button from "../Components/Button";
import ForgotPassword from "../Components/ForgotPassword";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    // const [formSubmitted, setFormSubmitted] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    const handleAppleSignIn = async () => {
        try {
            const appleProvider = new OAuthProvider("apple.com");
            const result = await signInWithPopup(auth, appleProvider);
            console.log("Apple User Info:", result.user);
            alert(`Welcome ${result.user.displayName || "User"}`);
        } catch (error) {
            console.error("Apple Sign-In Error:", error.message);
        }
    };

    const handleChange = (setter, field) => (e) => {
        const value = e.target.value;
        setter(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: value.trim() === '' ? `${field} cannot be empty` : '',
        }));

        if (field === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: value.trim() === ''
                    ? "Email cannot be empty"
                    : !validateEmail(value)
                        ? "Invalid email format"
                        : "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password.trim()) newErrors.password = "Password cannot be empty";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully!");
            setFormSubmitted(true);
            setEmail("");
            setPassword("");
            setErrors({});
        } else {
            setFormSubmitted(false);
        }
    };

    return (
        <div className="h-full bg-white">
            <div className="h-full">
                <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Sign In
                        </h2>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Your Social Campaigns
                        </p>
                    </div>

                    <div className="flex mt-8 justify-center">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="border border-gray-300 flex w-50 justify-center rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-gray-500 shadow-xs hover:bg-blue-500 focus:outline-none hover:text-white mr-2"
                        >
                            <FcGoogle className="text-lg mt-1 mr-1" />
                            Sign in with Google
                        </button>
                        <button
                            type="button"
                            onClick={handleAppleSignIn}
                            className="border border-gray-300 flex w-50 justify-center rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-gray-500 shadow-xs hover:bg-blue-500 focus:outline-none hover:text-white"
                        >
                            <FaApple className="text-xl mr-1" />
                            Sign in with Apple
                        </button>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="pb-5 text-center text-sm text-gray-500">Or with email</p>
                        {/* {formSubmitted && (
                            <div className="mb-4 p-2 text-green-700 bg-green-100 border border-green-400 rounded-md text-center">
                                ✅ Form submitted successfully!
                            </div>
                        )} */}

                        <div className="space-y-6">
                            <div>
                                <div className="mt-2">
                                    <EmailInputBox
                                        value={email}
                                        className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                        onChange={handleChange(setEmail, "email")}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <div className="mt-2">
                                    <PasswordInputBox
                                        value={password}
                                        className="border border-gray-300 focus:border-green-500 block w-full rounded-md px-3 py-1.5 text-base text-gray-900"
                                        onChange={handleChange(setPassword, "password")}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                                    <div className="text-sm text-end mt-2">
                                        <ForgotPassword className="font-semibold text-blue-600 hover:text-blue-500" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit" onClick={handleSubmit}
                                    className="text-sm text-right flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-500"
                                />
                            </div>
                        </div>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a Member yet?
                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500"> Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
