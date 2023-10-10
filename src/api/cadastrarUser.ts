import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:3001";

interface UserData {
  mail: string;
  name: string;
  alias: string;
  phone: string;
}

export async function cadastrarUser(userData: UserData): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuario`, userData);
    return response.data.user;
  } catch (error) {
    throw error;
  }
}
