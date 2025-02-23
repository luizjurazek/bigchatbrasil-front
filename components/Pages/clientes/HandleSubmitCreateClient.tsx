import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";
import { formSchema } from "./FormCreateClient";
import { Client, planType } from "@/types/ClientTypes";
import { PostCreateClient } from "@/api/Clients/PostCreateClient";

export default async function HandleSubmitCreateClient(
  values: z.infer<typeof formSchema>,
) {
  try {
    const client: Client = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      cpf: values.cpf,
      cnpj: values.cnpj,
      companyName: values.companyName,
      plan: planType[values.plan as keyof typeof planType],
      usedCredit: values.usedCredit,
      creditLimit: values.creditLimit,
    };

    await PostCreateClient(client);

    toast.success("Cliente criado com sucesso!", {
      description: "Cliente foi criado com sucesso.",
      duration: 3000,
    });

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    let errorMessage = "Ocorreu um erro ao criar o cliente.";

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 && error.response?.data) {
        const errorData = error.response.data;

        const errorMap: { [key: string]: string } = {
          email: "O email informado já está em uso.",
          cpf: "O CPF informado já está em uso.",
          cnpj: "O CNPJ informado já está em uso.",
          phone: "O telefone informado já está em uso.",
        };

        errorMessage = errorData
          .map((err: { field: string; error: string }) => {
            const fieldName = err.field.toLowerCase();
            return errorMap[fieldName] || err.error;
          })
          .join("<br />");
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    toast.error("Erro ao criar cliente.", {
      description: <div dangerouslySetInnerHTML={{ __html: errorMessage }} />,
      duration: 5000,
    });

    console.error("Erro ao criar cliente:", errorMessage);
  }
}
