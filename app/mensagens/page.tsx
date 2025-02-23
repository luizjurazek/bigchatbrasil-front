import { GetMessages } from "@/api/Messages/GetMessages";
import { columns } from "./table-messages-columns";
import { DataTable } from "@/components/Pages/Table";
import { ThemeToggle } from "@/components/ui/toggleButton";
import FormSendMessage from "@/components/Pages/Mensagens/FormSendMessage";
import { GetClients } from "@/api/Clients/GetClients";

export default async function MensagensPage() {
  let messageData = [];
  let clientData = [];

  try {
    messageData = await GetMessages();
    clientData = await GetClients();
  } catch (error) {
    console.error("Erro ao buscar mensagens ou clientes:", error);
    return (
      <div>
        <p>Erro ao carregar as mensagens. Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ThemeToggle />
      <FormSendMessage clients={clientData} />
      <div>
        <DataTable
          tableTitle="Mensagens: "
          columns={columns}
          data={messageData}
        />
      </div>
    </div>
  );
}
