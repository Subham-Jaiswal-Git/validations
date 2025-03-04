import React, { useState, useEffect } from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { getEmployees } from "../../src/Biometric/api/getEmployees"; // Import employee API

const machines = [
  { id: "Fingerprint", name: "Fingerprint" },
  { id: "Zkteco", name: "Zkteco" },
  { id: "MACHINE3", name: "MACHINE 3" },
  { id: "MACHINE4", name: "MACHINE 4" },
  { id: "MACHINE5", name: "MACHINE 5" },
];

const ZkTeco = () => {
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: false }
  );

  const [selectedMachine, setSelectedMachine] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [employeeError, setEmployeeError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      setEmployeeError("Failed to fetch employees.");
    } finally {
      setLoadingEmployees(false);
    }
  };

  const handleLoadData = () => {
    if (selectedMachine) {
      getData({ ignoreCache: true });
      setTimestamp(new Date().toLocaleString());
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Biometric Machine & Employee Data</h1>

      {/* Machine Selection */}
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

      {/* Biometric Data Table */}
      <h2 className="text-lg font-semibold mt-4">Biometric Data</h2>
      <table className="border-collapse border w-full mb-6">
        <thead>
          <tr>
            <th className="border p-2">Machine</th>
            <th className="border p-2">Visitor ID</th>
            <th className="border p-2">IP Address</th>
            <th className="border p-2">Timestamp</th>
            <th className="border p-2">Transaction ID</th>
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

      {/* Employee List Table */}
      <h2 className="text-lg font-semibold mt-4">Employee List</h2>
      {loadingEmployees ? (
        <p>Loading employees...</p>
      ) : employeeError ? (
        <p className="text-red-500">{employeeError}</p>
      ) : (
        <table className="border-collapse border w-full">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Employee Code</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td className="border p-2">{emp.id}</td>
                  <td className="border p-2">{emp.emp_code}</td>
                  <td className="border p-2">{emp.first_name}</td>
                  <td className="border p-2">{emp.last_name}</td>
                  <td className="border p-2">{emp.department?.dept_name || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-2 text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Error Message */}
      <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
      {error && <p className="text-red-500 text-center">{error.message}</p>}
    </div>
  );
};

export default ZkTeco;
