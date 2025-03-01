import React, { useState } from "react";
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react'

const machines = [
  { id: "MACHINE1", name: "MACHINE 1", apiEndpoint: "https://api.machine1.com/data" },
  { id: "MACHINE2", name: "MACHINE 2", apiEndpoint: "https://api.machine2.com/data" },
  { id: "MACHINE3", name: "MACHINE 3", apiEndpoint: "https://api.machine3.com/data" },
  { id: "MACHINE4", name: "MACHINE 4", apiEndpoint: "https://api.machine4.com/data" },
  { id: "MACHINE5", name: "MACHINE 5", apiEndpoint: "https://api.machine5.com/data" },
];

const BiometricIntegration = () => {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    if (!selectedMachine) return;

    setIsLoading(true);

    try {
      // Simulate API call to fetch data from the selected machine
      const selectedMachineInfo = machines.find((machine) => machine.id === selectedMachine);
      console.log("Selected Machine:", selectedMachineInfo);

      // Mock API response for testing
      const mockData = [
        { name: "John Doe", id: 101, startTime: "08:00", endTime: "17:00", trId: 1 },
        { name: "Jane Smith", id: 102, startTime: "09:00", endTime: "18:00", trId: 2 },
      ];

      // Simulate a delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Mock Data:", mockData);
      setData(mockData); // Set mock data for testing
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Biometric Machine Integration</h1>
      <div className="mb-4">
        <select className="border p-2 mr-2" value={selectedMachine} onChange={(e) => setSelectedMachine(e.target.value)}>
          <option value="">Select Machine</option>
          {machines.map((machine) => (
            <option key={machine.id} value={machine.id}>
              {machine.name}
            </option>
          ))}
        </select>
        
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={loadData}
          disabled={!selectedMachine || isLoading}
        >
          {isLoading ? "Loading..." : "Load Data"}
        </button>
      </div>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td className="border p-2">{entry.name}</td>
                <td className="border p-2">{entry.id}</td>
                <td className="border p-2">{entry.startTime}</td>
                <td className="border p-2">{entry.endTime}</td>
                <td className="border p-2">{entry.trId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BiometricIntegration;