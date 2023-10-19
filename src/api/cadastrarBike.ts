import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

interface BikeData {
  size: string;
  gender: { name: string };
  gear: string;
  rim: string;
  suspension: boolean;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  user: number; // Certifique-se de definir o ID do usuário corretamente
  brand: { name: string };
  material: { name: string };
  address: {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
  };
}

export async function cadastrarBike(bikeData: BikeData): Promise<any> {
  try {
    const response = await axios.post(`${API_BASE_URL}/bike`, bikeData);

    if (response.data.error) {
      // Lida com erros específicos, se necessário
      const errorDetail = response.data.error;
      if (/Usuário desconhecido/.test(errorDetail)) {
        throw new Error("Usuário desconhecido");
      } else if (/Marca desconhecida/.test(errorDetail)) {
        throw new Error("Marca desconhecida");
      } else if (/Genero não encontrado/.test(errorDetail)) {
        throw new Error("Genero não encontrado");
      } else if (/Endereço não encontrado/.test(errorDetail)) {
        throw new Error("Endereço não encontrado");
      } else if (/Material desconhecido/.test(errorDetail)) {
        throw new Error("Material desconhecido");
      }

      return null; // Não há dados da bicicleta, portanto, retorne null
    } else {
      // Os dados da bicicleta cadastrada estão no corpo da resposta
      const bikeDataFromResponse = response.data;
      console.log("Bicicleta cadastrada com sucesso:", bikeDataFromResponse);
      return bikeDataFromResponse; // Retorne os dados da bicicleta
    }
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
