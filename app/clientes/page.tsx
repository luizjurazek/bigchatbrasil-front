import { GetClients } from "@/api/Clients/GetClients";
import { ThemeToggle } from "@/components/ui/toggleButton";
import { DataTable } from "@/components/Pages/Table";
import { columns } from "./table-columns";

export default async function Home() {
  let data = [];

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
    <>
      <ThemeToggle />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
