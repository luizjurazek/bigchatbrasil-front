import { Trash } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner"; 

import { DeleteMessageById } from "@/api/Messages/DeleteMessageById"



export default function DeleteMessageModal({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  async function handleDelete() {
    if (selectedId) {
      console.log("Deletando mensagem com ID:", selectedId);
      try {

        await DeleteMessageById(selectedId);

        toast.success("Mensagem deletada!", {
          description: `Mensagem de id ${selectedId} deletada com sucesso.`,
          duration: 3000, 
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);

      } catch (error) {
        const errorMessage = "Ocorreu um erro ao deletar a mensagem.";

        toast.error("Erro ao deletar mensagem.", {
          description: errorMessage,
          duration: 5000,
        });

        console.error("Erro ao deletar a mensagem:", error);
      }

      setOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => handleOpenModal(id)}>
        <Trash />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
          </DialogHeader>
          <p>Tem certeza que deseja deletar esta mensagem?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="destructive" onClick={handleDelete}>Deletar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
