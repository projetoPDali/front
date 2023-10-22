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
  user: number; 
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
    // Converte o campo 'cep' de string para número e remove caracteres especiais
    const cepNumber = Number(bikeData.address.cep.replace(/\D/g, ''));

    // Converte o campo 'number' de string para número
    const number = Number(bikeData.address.number);

    // Cria uma nova instância de bikeData com os campos atualizados
    const updatedBikeData = {
      ...bikeData,
      address: {
        ...bikeData.address,
        cep: cepNumber,
        number: number,
      },
    };

    const response = await axios.post(`${API_BASE_URL}/bike`, updatedBikeData);

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
      console.log("Bicicleta cadastrada com sucesso:");
      return bikeDataFromResponse; // Retorne os dados da bicicleta
    }
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
