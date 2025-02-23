import { ThemeToggle } from "@/components/ui/toggleButton";
import FormSendMessage from "@/components/Pages/Mensagens/FormSendMessage";
import { GetClients } from "@/api/Clients/GetClients";
import { Client } from "@/types/ClientTypes";

export default async function Home() {
  const client: Client[] = await GetClients();
  
  return (
    <>
      <ThemeToggle />
      <h1>Home page</h1>
      <FormSendMessage clients={client}/>
    </>
  );
}
