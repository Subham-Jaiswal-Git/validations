import React, { useState } from "react";
import axios from "axios";

const AttendanceForm = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    // Simulated attendance data
    const attendanceData = {
      RealTime: {
        OperationID: "123123123",
        PunchLog: {
          Type: "CheckOut",
          Temperature: "36.8",
          FaceMask: false,
          InputType: "Fingerprint",
          UserId: "2",
          LogTime: new Date().toISOString()
        },
        AuthToken: "COJJ7eiiPBGUfmIQPvh2PJWWDLX7OuKs",
        Time: new Date().toISOString()
      }
    };

    try {
      // Replace with your actual backend URL (Node.js/PHP server)
      const res = await axios.post("http://localhost:3000/?stgid=12345", attendanceData, {
        headers: { "Content-Type": "application/json" }
      });

      setResponse(res.data);
    } catch (error) {
      setResponse({ status: "Error submitting attendance" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Submit Attendance</h2>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Attendance"}
      </button>
      {response && (
        <div className="mt-4 p-3 border rounded-md bg-gray-100">
          <strong>Response:</strong> {response.status}
        </div>
      )}
    </div>
  );
};

export default AttendanceForm;