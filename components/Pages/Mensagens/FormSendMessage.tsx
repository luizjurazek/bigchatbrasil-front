"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "sonner"; 

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
import { Checkbox } from "@/components/ui/checkbox";
import { Client } from "@/types/ClientTypes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 
import { HandleSubmitSendMessage } from "./HandleSubmitSendMessage"; 

export const formSchema = z.object({
  phonenumber: z.string().nonempty("O telefone é obrigatório"),
  message: z.string().nonempty("A mensagem é obrigatória"),
  whatsapp: z.boolean(),
  client_id: z.string().min(1, "Selecionar um cliente é obrigatório"), 
});

interface FormSendMessageProps {
  client_id?: number;
  clients?: Client[];
}

export default function FormSendMessage({ client_id, clients }: FormSendMessageProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phonenumber: "",
      message: "",
      whatsapp: false,
      client_id: client_id ? String(client_id) : "",
    },
  });

  return (
    <div className="rounded-xl border bg-card text-card-foreground">
      <Toaster position="top-right" /> 
      <div className="p-2">
        <h2 className="text-2xl font-bold">Envie uma nova mensagem:</h2>
      </div>
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(HandleSubmitSendMessage)} className="space-y-4">
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem className="text-gray-900 dark:text-gray-100">
                  <FormLabel className="text-gray-900 dark:text-gray-200">Telefone: </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(xx) xxxxx-xxxx"
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
              name="message"
              render={({ field }) => (
                <FormItem className="text-gray-900 dark:text-gray-100">
                  <FormLabel className="text-gray-900 dark:text-gray-200">Mensagem: </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua mensagem"
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {clients && clients.length > 0 && (
              <FormField
                control={form.control}
                name="client_id"
                render={({ field }) => (
                  <FormItem className="text-gray-900 dark:text-gray-100">
                    <FormLabel className="text-gray-900 dark:text-gray-200">Cliente: </FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}> 
                        <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          <SelectValue placeholder="Selecione um cliente" />
                        </SelectTrigger>
                        <SelectContent>
                          {clients.map((client: Client) => (
                            <SelectItem key={client.id} value={String(client.id)}>
                              {client.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem className="text-gray-900 dark:text-gray-100">
                  <FormLabel className="text-gray-900 dark:text-gray-200">É Whatsapp: </FormLabel>
                  <FormControl>
                    <Checkbox
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-6 w-md" type="submit">
              Enviar mensagem
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
