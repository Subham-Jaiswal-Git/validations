import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };
    return (
        <>
            <div className="h-full bg-white">
                <div className="h-full">

                    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 ">Sign In</h2>
                            <p className="mt-1 text-center text-sm/6 text-gray-500">Your Social Campaigns</p>
                        </div>

                        <div className="flex mt-8 justify-center">
                            <button type="submit" onClick={handleGoogleSignIn} className="border border-gray-300 focus:border-blue-500 flex w-50 justify-center rounded-md bg-white-600 px-4 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:text-white mr-2"><span className="text-lg mt-1 mr-1 "><FcGoogle /></span>Sign in with Google</button>
                            <button type="submit" className="border border-gray-300 focus:border-blue-500 flex w-50 justify-center rounded-md bg-white-600 px-4 py-1.5 text-sm/6 font-semibold text-gray-500 shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:text-white"><span className="text-xl mr-1"><FaApple /></span>Sign in with Apple</button>
                        </div>

                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                            <p className="pb-5 text-center text-sm/6 text-gray-500">Or with email</p>
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    {/* <label for="email" className="block text-sm/6 font-medium text-gray-900 text-start">Email address</label> */}
                                    <div className="mt-2">
                                        <input type="email" placeholder="Email" name="email" id="email" autocomplete="email" required
                                            className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6" />
                                    </div>
                                </div>

                                <div>
                                    {/* <div className="flex items-center justify-between">
                                            <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                        </div> */}
                                    <div className="mt-2">
                                        <input placeholder="Password" type="password" name="password" id="password" autocomplete="current-password" required
                                            className="border border-gray-300 focus:border-blue-500 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6" />
                                        <div className="text-sm text-end mt-2">
                                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign In</button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                Not a Member yet?<a href="#" className="font-semibold text-blue-600 hover:text-blue-500"> Sign up</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login;
