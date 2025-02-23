import { ThemeToggle } from "@/components/ui/toggleButton";
import FormSendMessage from "@/components/Pages/Mensagens/FormSendMessage";
import { GetClients } from "@/api/Clients/GetClients";
import { Client } from "@/types/ClientTypes";
import FormCreateClient from "@/components/Pages/clientes/FormCreateClient";
export default async function Home() {
  const client: Client[] = await GetClients();

  return (
    <div className="flex flex-col gap-4">
      <ThemeToggle />
      <FormCreateClient />
      <FormSendMessage clients={client} />
    </div>
  );
}
