"use client";

import { z } from "zod";
import { toast } from "sonner";
import { formSchema } from "./FormSendMessage";
import { PostSendMessage } from "@/api/Messages/PostSendMessage";
import { Message } from "@/types/MessageTypes";
import axios from "axios";

export async function HandleSubmitSendMessage(
  values: z.infer<typeof formSchema>,
) {
  try {
    const message: Message = {
      phoneNumber: values.phonenumber,
      message: values.message,
      whatsApp: values.whatsapp,
      client: {
        id: parseInt(values.client_id),
      },
    };

    await PostSendMessage(message);

    toast.success("Mensagem enviada com sucesso!", {
      description: "Sua mensagem foi entregue ao destinatário.",
      duration: 3000,
    });

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    let errorMessage = "Ocorreu um erro ao enviar a mensagem.";

    if (axios.isAxiosError(error)) {
      if (error.response?.data?.message == "User doesn't have enough balance") {
        errorMessage = "Saldo insuficiente para enviar a mensagem.";
      } else {
        errorMessage = error.response?.data?.message;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    toast.error("Erro ao enviar mensagem.", {
      description: errorMessage,
      duration: 5000,
    });

    console.error("Erro ao enviar a mensagem:", errorMessage);
  }
}
