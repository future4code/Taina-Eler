import { Industry, Residence } from "./Residents";

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }


export class ResidentialClient extends Residence implements Client{

    constructor(
      public name:string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity:number,
      cep: string
      ){
        super(registrationNumber,cep)
      }

      public getCpf(): string {
        return this.cpf;
      }

      public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }
}



export class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}