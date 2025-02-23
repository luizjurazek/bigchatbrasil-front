import { Message } from "@/types/MessageTypes"
import axios from "axios";

export const PostSendMessage = async (message: Message): Promise<Message> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.post(`${api}/sms`, message);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar a mensagem:", error);
    throw error;
  }
};
