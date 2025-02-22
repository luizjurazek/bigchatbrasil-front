import { Message } from "@/types/MessageTypes"
import axios from "axios";

export const GetMessagesByClientId = async (clientId: number): Promise<Message[]> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}/sms/client/${clientId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    throw error;
  }
};
