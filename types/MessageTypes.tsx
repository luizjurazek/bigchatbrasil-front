export type Message = {
  id?: number;
  phoneNumber: string;
  message: string;
  whatsApp: boolean;
  client: {
    id: number;
  };
};
