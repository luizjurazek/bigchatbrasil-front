export enum planType {
  POS_PAGO = "POS_PAGO",
  PRE_PAGO = "PRE_PAGO"
}
export type Client = {
  id?: number;
  name: string;
  email: string;
  phone: string;
	cpf: string;
	cnpj: string;
	companyName: string;
	plan: planType;
	usedCredit: number;
	creditLimit: number
}