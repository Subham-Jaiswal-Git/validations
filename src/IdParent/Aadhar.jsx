import React, { useState } from "react";
import Aadhaar from "../IdChild/Aadhaar";
const Aadhar = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");

  return (
    <div className="text-center max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
      <h2 className="text-center">Aadhaar Card Validation:</h2>
      <Aadhaar
        value={aadhaar}
        onChange={setAadhaar}
        className="border border-gray-500 rounded-md shadow-lg"
        onErrorOccur={setAadhaarError}
      />
      {aadhaarError && (
        <p className={`mt-2 text-sm ${aadhaarError.includes("❌") ? "text-red-600" : "text-green-600"}`}>{aadhaarError}</p>
      )}
    </div>
  )
}

export default Aadhar;
