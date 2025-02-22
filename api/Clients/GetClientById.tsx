import { Client } from "@/types/ClientTypes";
import axios from "axios";

export const GetClientById = async (clientId: number): Promise<Client> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}/clients/${clientId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    throw error;
  }
};
