import { Client } from "@/types/ClientTypes"
import axios from "axios";

export const PostCreateClient = async (client: Client): Promise<Client> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.post(`${api}/clients/register`, client);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o cliente:", error);
    throw error;
  }
};
