import React, { useState } from "react";
import VoterIdChild from '../IdChild/VoterIdChild';
const VoterId = () => {
    const [voterID, setVoterID] = useState("");
    const [voterIDError, setVoterIDError] = useState("");
    return (
        <div className="text-center max-w-sm rounded-lg shadow-lg bg-white p-5 border border-gray-200">
          <h2>Voter ID Validation:</h2>
          <VoterIdChild
            value={voterID}
            onChange={setVoterID}
            inputClassName="border border-gray-500 rounded-md shadow-lg"
            onErrorOccur={setVoterIDError}
          />
          {voterIDError && (
                <p className={`mt-2 text-sm ${voterIDError.includes("❌") ? "text-red-600" : "text-green-600"}`}>
                    {voterIDError}
                </p>
            )}
        </div>
    )
}

export default VoterId;