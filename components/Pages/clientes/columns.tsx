"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@/types/ClientTypes";
import Link from "next/link";
import { ExternalLink } from 'lucide-react';

export const columns: ColumnDef<Client>[] = [
  {
    header: "Id",
    accessorKey: "id"
  },
  {
    header: "Nome",
    accessorKey: "name"
  },
  {
    header: "E-mail",
    accessorKey: "email"
  },
  {
    header: "Telefone",
    accessorKey: "phone"
  },
  {
    header: "CPF",
    accessorKey: "cpf"
  },
  {
    header: "CNPJ",
    accessorKey: "cnpj"
  },
  {
    header: "Empresa",
    accessorKey: "companyName"
  },
  {
    header: "Plano",
    accessorKey: "plan"
  },
  {
    header: "Crédito utilizado",
    accessorKey: "usedCredit"
  },
  {
    header: "Limite de crédito",
    accessorKey: "creditLimit"
  },
  {
    header: "Perfil",
    accessorKey: "Perfil",  
    cell: ({ row }) => (
      <Link href={`/clients/${row.getValue('id')}`}><ExternalLink /></Link>
    )
  }
]

