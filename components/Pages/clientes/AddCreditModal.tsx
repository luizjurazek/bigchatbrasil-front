import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AddCreditLimit } from "@/api/Clients/AddCreditLimit";
import { toast } from "sonner";

export default function AddCreditModal({ id }: { id: number }) {
  const [open, setOpen] = useState(false);
  const [credit, setCredit] = useState<string>("0");

  const handleOpenModal = () => {
    setOpen(true);
  };

  async function handleUpdate() {
    const parsedCredit = parseFloat(credit);

    try {
      if (!isNaN(parsedCredit) && parsedCredit > 0) {
        await AddCreditLimit(id, parsedCredit);

        toast.success("Crédito adicionado com sucesso!", {
          description: `Foram adicionados ${parsedCredit.toFixed(2)} em créditos.`,
          duration: 3000,
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);

        setOpen(false);
      } else {
        console.error("Valor inválido para o crédito!");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao inserir os créditos!", {
        description: "Ocorreu um erro ao inserir os créditos, tente novamente",
        duration: 3000,
      });

      console.log("Erro ao inserir os créditos: ", error);
    }
  }

  return (
    <>
      <div>
        <Button onClick={handleOpenModal}>Inserir crédito</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar crédito</DialogTitle>
          </DialogHeader>
          <p>Insira o valor que deseja adicionar de crédito: </p>
          <Input
            placeholder="00.00"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="default" onClick={handleUpdate}>
              Inserir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
