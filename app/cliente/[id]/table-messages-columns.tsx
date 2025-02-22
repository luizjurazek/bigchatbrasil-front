"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Message } from "@/types/MessageTypes"

export const columns: ColumnDef<Message>[] = [
  {
    header: "Id",
    accessorKey: "id"
  },
  {
    header: "Telefone",
    accessorKey: "phoneNumber"
  },
  {
    header: "Mensagem",
    accessorKey: "message"
  },
  {
    header: "Whatsapp",
    accessorKey: "whatsApp"
  },
]

