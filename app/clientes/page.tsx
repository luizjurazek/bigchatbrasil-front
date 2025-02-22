import { getClients } from "@/api/Clients/GetClients/clientData";
import { ThemeToggle } from "@/components/ui/toggleButton";
import { DataTable } from "@/components/Pages/clientes/TableClients";
import { columns } from "@/components/Pages/clientes/columns";

export default async function Home() {
  let data = [];

  try {
    data = await getClients();
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
