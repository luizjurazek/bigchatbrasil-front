import { Client } from "@/types/ClientTypes";
import axios from "axios";

export const AlterPlanType = async (id: number, newPlanType: string): Promise<Client> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const data = {
    newPlanType: newPlanType
  }
  try {
    const response = await axios.put(`${api}/clients/alter-plan-type/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao alterar o tipo de plano:", error);
    throw error;
  }
}

