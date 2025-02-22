import axios from "axios";
import { Message } from "@/types/MessageTypes";

export const GetMessages = async (): Promise<Message[]> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}/sms/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    throw error;
  }
};
