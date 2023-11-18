import axios from "axios";

const API_BASE_URL = "http://localhost:3001/usuario";

interface LoginData {
  mail: string;
  password: string;
}

export interface User {
  mail: string;
  name: string;
  id: number;
  alias: string;
  phone?: string;
  rents?:any
  addresses?:any
}

export async function fazerLogin(loginData: LoginData): Promise<string | null | User> {
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

    // Extract user object from response
    const user: User = response.data.user;

    // Log the user object
    console.log("User Object:", user);

    return user; // Return user object if there is no error
  } catch (error) {
    console.error("Erro desconhecido:", error);
    return "Erro desconhecido";
  }
}
