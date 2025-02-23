"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Message } from "@/types/MessageTypes"
import { Trash } from 'lucide-react';

function deleteMessage(id: string) {
  console.log(id)
}

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
  {
    header: "Deletar",
    accessorKey: "delete",  
    cell: ({ row }) => (
      <button onClick={() => deleteMessage((`${row.getValue('id')}`))}><Trash /></button>
    )
  }
]

