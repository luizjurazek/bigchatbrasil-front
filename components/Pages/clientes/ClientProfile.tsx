"use client"  
import { Client } from "@/types/ClientTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import UpdateLimitModal from "./UpdateLimitModal"

type ClientProfileProps = {
  client: Client;
};

export default function ClientProfile({ client }: ClientProfileProps) {
  const creditPercentage = (client.usedCredit / client.creditLimit) * 100
  const balance = (client.creditLimit - client.usedCredit)
return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Cliente: {client.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{client.companyName}</p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">ID</p>
              <p className="text-sm text-muted-foreground">{client.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Plano</p>
              <p className="text-sm text-muted-foreground">{client.plan}</p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{client.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{client.phone}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">CPF</p>
                <p className="text-sm text-muted-foreground">{client.cpf}</p>
              </div>
              <div>
                <p className="text-sm font-medium">CNPJ</p>
                <p className="text-sm text-muted-foreground">{client.cnpj}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Crédito utilizado</p>
              <p className="text-sm text-muted-foreground">
                {client.usedCredit.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} /{" "}
                {client.creditLimit.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
              <p className="text-sm text-muted-foreground">Crédito disponível: {balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>
            <Progress value={creditPercentage} className="h-2" />
          </div>
          <Separator />
          <div className="">
            <div className="flex gap-6">
              {client.id && client.plan === "POS_PAGO" && (
                <UpdateLimitModal id={client.id} limit={client.creditLimit} />
              )}

              {client.plan === "PRE_PAGO" && (
                <div>
                  <Button>Adicionar crédito</Button>
                </div>
              )}

              <div>
                <Button>Alterar plano</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
