import axios from "axios";

const API_BASE_URL = "http://58.23.12.98:8097"; // Replace with actual server IP and port
const AUTH_TOKEN = "b86a6827b124c471ec2b9925d7a8ec949547d67d"; // Replace with actual token

export const getEmployees = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/personnel/api/employees/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${AUTH_TOKEN}`
      },
      params: filters // Pass filters as query parameters
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};