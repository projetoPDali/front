import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export async function GetUserById(userId: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuario/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
