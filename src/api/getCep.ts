import axios from "axios";

const API_BASE_URL = "https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/{cep}";

interface GetCep {
estado: string,
cidade: string,
bairro: string,
rua: string
}

export async function GetCep(cep: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/endereco/${cep}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
