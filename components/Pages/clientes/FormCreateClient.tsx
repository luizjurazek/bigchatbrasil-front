"use client"
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster } from "sonner"; 

import { planType } from "@/types/ClientTypes";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 


import { HandleSubmitCreateClient } from "./HandleSubmitCreateClient";

export const formSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.string().email("O email é inválido").nonempty("O email é obrigatório"),
  phone: z.string().nonempty("O telefone é obrigatório"),
  cpf: z.string().nonempty("O CPF é obrigatório"),
  cnpj: z.string().nonempty("O CNPJ é obrigatório"),
  companyName: z.string().nonempty("O nome da empresa é obrigatório"),
  usedCredit: z
    .string()
    .nonempty("O crédito utilizado é obrigatório e precisar ser mais que 0")
    .transform((val) => parseFloat(val.replace(",", "."))) 
    .refine((val) => val >= 0, "O crédito utilizado precisa ser maior que 0"),
  plan: z.string().nonempty("O plano é obrigatório"),
  creditLimit: z
    .string()
    .nonempty("O limite de crédito é obrigatório e precisar ser mais que 0")
    .transform((val) => parseFloat(val.replace(",", ".")))  
    .refine((val) => val >= 0, "O limite de crédito precisa ser maior que 0"),
});

export default function FormCreateClient() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
      cnpj: "",
      companyName: "",
      usedCredit: 0,
      plan: "",
      creditLimit: 0,
    },
  });

  return (
    <div className="rounded-xl border bg-card text-card-foreground">
      <Toaster position="top-right" />
      <div className="p-2">
        <h2 className="text-2xl font-bold">Crie um cliente:</h2>
      </div>
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(HandleSubmitCreateClient)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Nome: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Email: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@example.com.br"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Plano: </FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          <SelectValue placeholder="Selecione um plano" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(planType).map((plan) => (
                            <SelectItem key={plan} value={plan}>
                              {plan.replace("_", " ")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">CPF: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="xxx.xxx.xxx-xx"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">CNPJ: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="xx.xxx.xxx/xxxx-xx"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Empresa: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome da empresa"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="usedCredit"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Crédito utilizado: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="00.00"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value.replace(",", ".");
                          field.onChange(value);
                        }}
                        value={field.value ? field.value.toString() : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="creditLimit"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Limite de crédito: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="00.00"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value.replace(",", ".");
                          field.onChange(value);
                        }}
                        value={field.value ? field.value.toString() : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="mt-6 w-md" type="submit">
              Criar cliente
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
