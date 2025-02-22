import { Client } from "@/types/ClientTypes";
import axios from "axios";

export const GetClients = async (): Promise<Client[]> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}/clients`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    throw error;
  }
}

