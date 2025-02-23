import axios from "axios";
import { Message } from "@/types/MessageTypes";

export const DeleteMessageById = async (
  idMessage: string,
): Promise<Message> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.delete(`${api}/sms/delete/${idMessage}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar mensagen:", error);
    throw error;
  }
};
