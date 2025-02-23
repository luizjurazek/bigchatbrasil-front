"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Message } from "@/types/MessageTypes";
import DeleteMessageModal from "@/components/Pages/Mensagens/DeleteMessageModal"


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
    cell: ({ row }) => <DeleteMessageModal id={row.getValue("id")} />
  }
];
