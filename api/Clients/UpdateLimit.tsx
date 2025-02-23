import { Client } from "@/types/ClientTypes";
import axios from "axios";

export const UpdateLimit = async (
  id: number,
  newLimit: number,
): Promise<Client> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const data = {
    newLimit: newLimit,
  };
  try {
    const response = await axios.put(`${api}/clients/update-limit/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o limite:", error);
    throw error;
  }
};
