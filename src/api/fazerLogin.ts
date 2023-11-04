import axios from "axios";

const API_BASE_URL = "http://localhost:3001/usuario";

interface LoginData {
  mail: string;
  password: string;
}

export async function fazerLogin(loginData: LoginData): Promise<any> {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData); console.log("dados do fazerLogin",loginData)

    if (response.data.error) {
      // Verifica se a resposta da API contém um erro
      throw new Error("Credenciais inválidas"); // Ou outra mensagem de erro apropriada
    } else {
      // O login foi bem-sucedido e os dados do usuário podem estar no corpo da resposta
      const userDataFromResponse = response.data;
      console.log("Login bem-sucedido:", userDataFromResponse);
      return userDataFromResponse; // Retorne os dados do usuário ou token de autenticação, dependendo da sua implementação
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
