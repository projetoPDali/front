import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:3001";

interface UserData {
  mail: string;
  name: string;
  alias: string;
  phone: string;
  password: string;
}

export async function cadastrarUser(userData: UserData): Promise<any> {
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
      
      return null; // Não há dados do usuário, portanto, retorne null
    } else {
      // Os dados cadastrados estão no corpo da resposta
      const userDataFromResponse = response.data;
      console.log("Usuário cadastrado com sucesso:", userDataFromResponse);
      return userDataFromResponse; // Retorne os dados do usuário
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
