import React, { useState } from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { getEmployees } from "../../src/Biometric/api/getEmployees";

const machines = [
  { id: "Fingerprint", name: "Fingerprint" },
  { id: "Zkteco", name: "Zkteco" },
  { id: "MACHINE3", name: "MACHINE 3" },
  { id: "MACHINE4", name: "MACHINE 4" },
  { id: "MACHINE5", name: "MACHINE 5" },
];

const Biometric = () => {
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: false }
  );

  const [selectedMachine, setSelectedMachine] = useState("");
  const [timestamp, setTimestamp] = useState("");
  

  const handleLoadData = () => {
    if (selectedMachine) {
      getData({ ignoreCache: true });
      setTimestamp(new Date().toLocaleString());
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Biometric Machine Integration</h1>
      <div className="mb-4">
        <select
          className="border p-2 mr-2"
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
        >
          <option value="">Select Machine</option>
          {machines.map((machine) => (
            <option key={machine.id} value={machine.id}>
              {machine.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleLoadData}
          disabled={!selectedMachine || isLoading}
        >
          {isLoading ? "Loading..." : "Load Data"}
        </button>
      </div>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">Machine</th>
            <th className="border p-2">Visitor ID</th>
            <th className="border p-2">IP Address</th>
            <th className="border p-2">Timestamp</th>
            <th className="border p-2">Transaction ID</th>
            {/* <th className="border p-2">Email</th> */}
            
          </tr>
        </thead>
        <tbody>
          {selectedMachine ? (
            <tr>
              <td className="border p-2">{selectedMachine}</td>
              <td className="border p-2">{isLoading ? "Loading..." : data?.visitorId || "N/A"}</td>
              <td className="border p-2">{data?.ip || "N/A"}</td>
              <td className="border p-2">{timestamp || "N/A"}</td>
              <td className="border p-2">{data?.requestId || "N/A"}</td>
              {/* <td className="border p-2">{data?.users?.email || "N/A"}</td> */}
            </tr>
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                Select a Machine to Display Data
              </td>
            </tr> 
          )}
        </tbody>
      </table>
      <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
      {error && <p className="text-red-500 text-center">{error.message}</p>}
    </div>
  );
};

export default Biometric;