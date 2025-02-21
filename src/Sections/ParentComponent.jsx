import React, { useState } from "react";
import DL from "../Components/DL";
import Pan from "../Components/Pan";
import VoterIDForm from "../Components/VoterIDForm";
import ESIC from "../Components/ESIC";
import Aadhaar from "../Components/Aadhaar";

import Gst from "../Components/Gst";
import EPF from "../Components/EPF";
import NationalPopulationRegister from "../Components/NationalPopulationRegister"
import FinancialTaxation from "../Components/FinancialTaxation";
import ITRValidation from "../Components/ITRValidation";
import PropertyLandRecords from "../Components/PropertyLandRecords";
import PropertyRegistrationCertificate from "../Components/PropertyRegistrationCertificate";
import EncumbranceCertificate from "../Components/EncumbranceCertificate";

const ParentComponent = () => {
  const [esicValue, setEsicValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [voterID, setVoterID] = useState("");
  const [voterIDError, setVoterIDError] = useState("");

  const [pan, setPan] = useState("");
  const [panError, setPanError] = useState("");

  const [dl, setDL] = useState("");
  const [dlError, setDLError] = useState("");

  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");

  return (
    <>
      <div className="flex gap-2 p-5">
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2 className="text-center ">ESIC Number Validation : </h2>
          <ESIC
            value={esicValue}
            onChange={setEsicValue}
            className=""
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            error={errorMessage}
            onErrorOccur={setErrorMessage}
          />
        </div>

        <div className="max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2 className="text-center">Voter ID Validation:</h2>
          <VoterIDForm
            value={voterID}
            onChange={setVoterID}
            className=""
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            error={voterIDError}
            onErrorOccur={setVoterIDError}
          />
        </div>

        <div className="max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2 className="text-center">PAN Validation:</h2>
          <Pan
            value={pan}
            onChange={setPan}
            className=""
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            error={panError}
            onErrorOccur={setPanError}
          />
        </div>

        <div className="max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2 className="text-center">Driving License Validation:</h2>
          <DL
            value={dl}
            onChange={setDL}
            className=""
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            error={dlError}
            onErrorOccur={setDLError}
          />
        </div>

        <div className="max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2 className="text-center">Aadhaar Card Validation:</h2>
          <Aadhaar
            value={aadhaar}
            onChange={setAadhaar}
            className=""
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            error={aadhaarError}
            onErrorOccur={setAadhaarError}
          />
        </div>


      </div>


























      {/* <Gst/> */}

      {/* <EPF
        msg1="Please enter a valid EPF number."
        msg2="🔹 Keep typing... EPF should be 22 digits."
        validMsg="✅ Valid EPF Number."
        invalidMsg="❌ Invalid EPF Number."
        formatMsg="EPF should be exactly 22 digits numeric value."
        handleBlur="❌ Invalid EPF Number."
        handleFocus="🔹 Start typing your EPF number..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      /> */}

      {/*<NationalPopulationRegister
        msg1="Please enter a valid NPR number."
        msg2="🔹 Keep typing... NPR should be in XXX-XXXX-XXXXXX format."
        validMsg="✅ Valid NPR Number."
        invalidMsg="❌ Invalid NPR Number."
        formatMsg="NPR should be in XXX-XXXX-XXXXXX format."
        handleBlur="❌ Invalid NPR Number."
        handleFocus="🔹 Start typing your NPR number..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <FinancialTaxation
        msg1="Please enter a valid document number."
        msg2="🔹 Keep typing... Document should be in the correct format (AAAAA1234A)."
        validMsg="✅ Valid Document Number."
        invalidMsg="❌ Invalid Document Number."
        formatMsg="Document should be in the format AAAAA1234A."
        handleBlur="❌ Invalid Document Number."
        handleFocus="🔹 Start typing your document number..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <ITRValidation
        msg1="Please enter a valid ITR form."
        msg2="🔹 Keep typing... ITR should be in format ITR-1 to ITR-7."
        validMsg="✅ Valid ITR Form."
        invalidMsg="❌ Invalid ITR Form."
        formatMsg="ITR should be in format ITR-1 to ITR-7."
        handleBlur="❌ Invalid ITR Form."
        handleFocus="🔹 Start typing your ITR form..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <PropertyLandRecords
        msg1="Please enter a valid record ID."
        msg2="🔹 Keep typing... Format: ABCD-1234-56789."
        validMsg="✅ Valid Record ID."
        invalidMsg="❌ Invalid Record ID."
        formatMsg="Record ID should be in format ABCD-1234-56789."
        handleBlur="❌ Invalid Record ID."
        handleFocus="🔹 Start typing your Property Record ID..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <PropertyRegistrationCertificate
        msg1="Please enter a valid certificate number."
        msg2="🔹 Keep typing... Format: PRC-YYYY-NNNNNN."
        validMsg="✅ Valid Certificate Number."
        invalidMsg="❌ Invalid Certificate Number."
        formatMsg="Certificate No should be in format PRC-YYYY-NNNNNN."
        handleBlur="❌ Invalid Certificate Number."
        handleFocus="🔹 Start typing your Property Registration Certificate No..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <EncumbranceCertificate
        msg1="Please enter a valid certificate number."
        msg2="🔹 Keep typing... Format: EC-YYYY-NNNNNN."
        validMsg="✅ Valid Certificate Number."
        invalidMsg="❌ Invalid Certificate Number."
        formatMsg="Certificate No should be in format EC-YYYY-NNNNNN."
        handleBlur="❌ Invalid Certificate Number."
        handleFocus="🔹 Start typing your Encumbrance Certificate No..."
        div1ClassName="flex flex-col items-center mb-5 mt-5"
        div2ClassName="w-full max-w-sm p-5 bg-white shadow-lg rounded-lg"
        h2ClassName="text-xl font-semibold mb-4 text-center"
        labelClassName="block text-gray-700 text-sm font-bold mb-2"
        inputClassName="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      /> */}

    </>
  );
};

export default ParentComponent;