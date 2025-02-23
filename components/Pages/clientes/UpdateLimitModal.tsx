import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { UpdateLimit } from "@/api/Clients/UpdateLimit";
import { toast } from "sonner";

export default function UpdateLimitModal({ id, limit }: { id: number, limit: number }) {
  const [open, setOpen] = useState(false);
  const [newLimit, setNewLimit] = useState<string>(limit.toString());

  const handleOpenModal = () => {
    setOpen(true);
  };

  async function handleUpdate() {
    try {
      const parsedLimit = parseFloat(newLimit);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        console.log("Novo limite:", parsedLimit);
        await UpdateLimit(id, parsedLimit);

        toast.success("Limite atualizada com sucesso!", {
          description: `O limite foi atualizado para ${parsedLimit}.`,
          duration: 3000,
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);

        setOpen(false);
      } else {
        console.error("Valor inválido para o limite!");
      }

    } catch (error){
      toast.success("Ocorreu um erro ao atualizar o limite!", {
        description: "Ocorreu um erro ao atualizar o limite, tente novamente",
        duration: 3000,
      });

      console.log("Erro ao atualizar o limte: ", error)
    }
  }

  return (
    <>
      <div>
        <Button onClick={handleOpenModal}>Atualizar limite</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Atualizar limite</DialogTitle>
          </DialogHeader>
          <p>Insira o novo limite: </p>
          <Input
            placeholder="00.00"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            value={newLimit} 
            onChange={(e) => setNewLimit(e.target.value)} 
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="default" onClick={handleUpdate}>Atualizar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
