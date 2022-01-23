// export class Transaction {
//     private description: string;
//     private value: number;
//     private date: string;

//     constructor(
//         description: string,
//         value: number,
//         date: string,
//      ) {
//         this.description = description;
//         this.value = value;
//         this.date = date;
//     }

//     public getDescription():string {
//         return this.description
//     }

//     public getValue():number {
//         return this.value
//     }

//     public getDate():string {
//         return this.date
//     }      
    
// }


// export class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }

//     public getCpf():string {
//         return this.cpf
//     }

//     public getName():string {
//         return this.name
//     }

//     public getAge():number {
//         return this.age
//     }
    
//     public getBalance():number {
//         return this.balance
//     } 

//     public getTransactions():Transaction[] {
//         return this.transactions
//     } 

//     setTransactions(newTransaction: Transaction):void{
//         console.log(this.transactions)
//         this.transactions.push(newTransaction)
//     }

// }



// export class Bank {
//     private accounts: UserAccount[];
  
//     constructor(accounts: UserAccount[]) {
//       this.accounts = accounts;
//     }

   
  
// }

// const myAccount = new UserAccount("112536522", "alguem", 20)
// const myTransfer = new Transaction("2021-12-06", 50, "pagango")
// myAccount.setTransactions(myTransfer)
// console.log(myAccount.getTransactions())


export class Transaction  {
    private description: string;
    private value: number;
    private date: string;

    constructor(description:string, value:number, date:string){
        this.description = description
        this.value = value
        this.date = date
    }

    //Acesso desses valores privados

    public getDescription():string {
        return this.description
    }

    public getValue():number {
        return this.value
    }

    public getDate():string {
        return this.date
    }
}

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf():string {
        return this.cpf
    }

    public getName():string {
        return this.name
    }

    public getAge():number {
        return this.age
    }
    public setAge(newAge:number):void{
        this.age = newAge
    }

    setTransactions(newTransaction: Transaction) : void {
        this.transactions.push(newTransaction) 
    }

    getTransaction(): Transaction[]{
    return this.transactions
    }
  
}


export class Bank {
    private accounts: UserAccount[];
        // private transaction: Transaction[]
      
        constructor(
            accounts: UserAccount[]
            // transaction: Transaction[]
            ) {
          this.accounts = accounts;
        //   this.transaction = transaction
        }
    setAccounts(newAccounts: UserAccount) : void {
        console.log(this.accounts)
        this.accounts.push(newAccounts)
    }
    
    getAccounts(): UserAccount[]{
        return this.accounts
    }
    
    //         setTransactions(newTransaction: Transaction) : void {
    //                 console.log(this.transaction)
    //                 this.transaction.push(newTransaction)
    // }
            
    //         getTransaction(): Transaction[]{
    //                 return this.transaction
    //                 }

  }