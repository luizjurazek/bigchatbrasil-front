import { Client } from "@/types/ClientTypes";
import axios from "axios";

export const AddCreditLimit = async (
  id: number,
  credit: number,
): Promise<Client> => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const data = {
    newBalanceCredit: credit,
  };
  try {
    const response = await axios.put(
      `${api}/clients/add-credit-limit/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar créditos:", error);
    throw error;
  }
};
