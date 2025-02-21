import React, { useState } from "react";
import OtpBox from "../Components/OtpBox";

const Otp = () => {
  const [otpValue, setOtpValue] = useState("");

//   const handleSubmit = () => {
//     console.log("Entered OTP:", otpValue);
//     // Add API call for OTP verification here
//   };

  return (
    <div className="text-center mt-12">
      <h2>Enter OTP</h2>
      <OtpBox
        name="user-otp"
        length={10}
        className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md"
        onChange={setOtpValue}
        value={otpValue}
      />
      {/* <button onClick={handleSubmit} // Submitting OTP manually
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >Submit OTP</button> */}
    </div>
  );
};

export default Otp;
