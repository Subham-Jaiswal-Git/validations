import React, { useEffect, useState } from "react";
import axios from "axios";

const AttendanceLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/get-logs")
            .then(response => setLogs(response.data))
            .catch(error => console.error("Error fetching logs:", error));
    }, []);

    return (
        <div>
            <h2>Attendance Logs</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Timestamp</th>
                        <th>Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.user_id}</td>
                            <td>{log.timestamp}</td>
                            <td>{log.mode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceLogs;

