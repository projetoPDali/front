import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:3001";

interface UserData {
  mail: string;
  name: string;
  alias: string;
  phone: string;
}

export async function cadastrarUser(userData: UserData): Promise<void> {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuario`, userData);

    if (response.data.error) {
      const errorDetail = response.data.error;

      if (/Codinome já existe/.test(errorDetail)) {
        throw new Error("Codinome já existe");
      } else if (/E-mail já existe/.test(errorDetail)) {
        throw new Error("E-mail já existe");
      } else if (/Telefone já existe/.test(errorDetail)) {
        throw new Error("Telefone já existe");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


