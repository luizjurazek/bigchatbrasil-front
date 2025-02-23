import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { planType } from "@/types/ClientTypes";
import { toast } from "sonner";
import { AlterPlanType } from "@/api/Clients/AlterPlanType";

export default function UpdatePlanModal({
  id,
  initialPlan,
}: {
  id: number;
  initialPlan: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<planType | "">("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  async function handleUpdate() {
    try {
      await AlterPlanType(id, selectedPlan);

      toast.success("Plano atualizado com sucesso!", {
        description: `O plano foi alterado para ${selectedPlan}.`,
        duration: 3000,
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);

      setOpen(false);
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar o plano!", {
        description: "Ocorreu um erro ao atualizar o plano, tente novamente",
        duration: 3000,
      });

      console.log("Erro ao inserir os créditos: ", error);
    }
  }

  const plansToDisplay = Object.values(planType).filter(
    (plan) => plan !== initialPlan,
  );

  return (
    <>
      <div>
        <Button onClick={handleOpenModal}>Alterar plano</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alterar plano</DialogTitle>
          </DialogHeader>
          <p>Selecione o tipo de plano que deseja:</p>

          <Select
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as planType)}
          >
            <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
              {plansToDisplay.map((plan) => (
                <SelectItem key={plan} value={plan}>
                  {plan === planType.POS_PAGO
                    ? "Plano Pós-Pago"
                    : "Plano Pré-Pago"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="default" onClick={handleUpdate}>
              Alterar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
