import axios from "axios";

const API_BASE_URL = "http://localhost:3001/usuario";

interface LoginData {
  mail: string;
  password: string;
}

export async function fazerLogin(loginData: LoginData): Promise<string | null> {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);

    if (response.data && response.data.error) {
      const errorDetail = response.data.error;

      if (/Usuário inexistente/.test(errorDetail)) {
        return "Usuário inexistente";
      } else if (/Senha incorreta/.test(errorDetail)) {
        return "Senha incorreta";
      } else {
        console.error("Erro desconhecido:", errorDetail);
        return "Erro desconhecido";
      }
    }

    return null; // Retorna nulo se não houver erro
  } catch (error) {
    console.error("Erro desconhecido:", error);
    return "Erro desconhecido";
  }
}
