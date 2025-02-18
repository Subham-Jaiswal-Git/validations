import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, OAuthProvider } from "firebase/auth";

const Login2 = () => {
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

    return (
        <>
            <div className="overflow-hidden bg-white sm:py-0">
                <div className="mx-auto max-w-full px-0 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="h-full bg-white">
                            <div className="h-full">
                                <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h2 className="mt-10 text-start text-2xl/9 font-bold tracking-tight text-gray-900 ">Welcome back</h2>
                                        <p className="mt-1 text-start text-sm/6 text-black-500">Enter Your Credentials to access your account</p>
                                    </div>

                                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" action="#" method="POST">
                                            {/* <div>
                                            <label for="username" className="block text-sm/6 font-medium text-gray-900 text-start">Name</label>
                                            <div>
                                                <input type="text" placeholder="Enter your name" name="username" id="username" autocomplete="username" required
                                                    className="border border-gray-300 focus:border-green-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                            </div>
                                        </div> */}

                                            <div>
                                                <label for="email" className="block text-sm/6 font-medium text-gray-900 text-start">Email address</label>
                                                {/* <div>
                                                <input type="email" placeholder="Email" name="email" id="email" autocomplete="email" required
                                                    className="border border-gray-300 focus:border-green-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                            </div> */}
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                                    <div className="text-sm text-end">
                                                        <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* <input placeholder="Password" type="password" name="password" id="password" autocomplete="current-password" required
                                                    className="border border-gray-300 focus:border-green-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" /> */}
                                                </div>
                                            </div>

                                            <div>
                                                {/* <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Login</button> */}
                                            </div>

                                            <div class="relative flex items-center justify-center text-gray-500">
                                                <span class="px-4 text-sm font-medium">Or</span>
                                                <div class="absolute w-full border-t border-gray-300"></div>
                                            </div>
                                        </form>


                                    </div>

                                    <div className="flex mt-8 justify-center">
                                        <button type="submit" onClick={handleGoogleSignIn} className="border border-gray-300 focus:border-green-500 flex w-50 justify-center rounded-md bg-white-600 px-4 py-1.5 text-sm/6 font-semibold text-black-500 shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:text-white mr-2"><span className="text-lg mt-1 mr-1 "><FcGoogle /></span>Sign in with Google</button>
                                        <button id="apple" type="submit" onClick={handleAppleSignIn} className="border border-gray-300 focus:border-green-500 flex w-50 justify-center rounded-md bg-white-600 px-4 py-1.5 text-sm/6 font-semibold text-black-500 shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:text-white"><span className="text-xl mr-1"><FaApple /></span>Sign in with Apple</button>

                                    </div>
                                    <p className="mt-3 text-center text-sm/6 text-gray-500">
                                        Don't have an account? <a href="#" className="font-semibold text-blue-600 hover:text-blue-500"> Sign up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            alt="Product screenshot"
                            className="hidden lg:block h-screen w-full object-cover rounded-tl-[35px] rounded-bl-[35px] ring-1 shadow-xl ring-gray-400/10"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login2;
