export abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
      return this.cep;
    }
}



//Representa uma casa residencial
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity():number{
        return this.residentsQuantity
    }
}

//Representa um comércio
  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity():number{
        return this.floorsQuantity
    }
}

//Representa uma indústria
export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity():number{
        return this.machinesQuantity
    }
}



