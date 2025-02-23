import { GetMessages } from "@/api/Messages/GetMessages";
import { columns } from "./table-messages-columns";
import { DataTable } from "@/components/Pages/Table";
import { ThemeToggle } from "@/components/ui/toggleButton";

export default async function MensagensPage() {
  let data = [];
  
    try {
      data = await GetMessages();
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
      return (
        <div>
          <p>Erro ao carregar as mensagens. Tente novamente mais tarde.</p>
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