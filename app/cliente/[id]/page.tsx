import { ThemeToggle } from "@/components/ui/toggleButton";
import { GetClientById } from "@/api/Clients/GetClientById";
import { GetMessagesByClientId } from "@/api/Messages/GetMessagesByClientId";
import { DataTable } from "@/components/Pages/Table";
import { columns } from "./table-messages-columns";
import ClientProfile from "@/components/Pages/clientes/ClientProfile";
import { Client } from "@/types/ClientTypes";
import { Message } from "@/types/MessageTypes";

type ClientPageProps = {
  params: { id: string };
};

export default async function ClientPage({ params }: ClientPageProps) {
  const { id } = await params
  const idClient: number = parseInt(id, 10);
  const client: Client = await GetClientById(idClient);
  const messages: Message[] = await GetMessagesByClientId(idClient);

  return (
    <div className="flex flex-col gap-6">
      <ThemeToggle />
      <div>
        <ClientProfile client={client} />
      </div>
      <div>
        <DataTable columns={columns} data={messages} />
      </div>
    </div>
  );
}
