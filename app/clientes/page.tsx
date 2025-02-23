import { GetClients } from "@/api/Clients/GetClients";
import { ThemeToggle } from "@/components/ui/toggleButton";
import { DataTable } from "@/components/Pages/Table";
import { columns } from "./table-columns";
import FormCreateClient from "@/components/Pages/clientes/FormCreateClient";
import { Client } from "@/types/ClientTypes";

export default async function Clientes() {
  let data: Client[] = [];

  try {
    data = await GetClients();
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return (
      <div>
        <p>Erro ao carregar os clientes. Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ThemeToggle />
      <FormCreateClient />
      <div>
        <DataTable tableTitle="Clientes: " columns={columns} data={data} />
      </div>
    </div>
  );
}
