import app from "./app"
import { Request, Response } from "express"
import { Bank, Transaction, UserAccount } from "./types"
// import { Transaction, UserAccount } from "./types"

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello World!")
})



// //QUESTÃO 1
// //Instânciando a classe UserAccount

// const userAccount = new UserAccount("000-000-000-00", "João", 25)
// // console.log(userAccount) //1b)é chamado uma vez


//  //QUESTÃO 2

const transaction = new Transaction("Pagamento efetuado",20,"20/02/2021")
// // // console.log(transaction)
// // // const userAccount = new UserAccount("000-000-000-00", "João", 25)
// userAccount.setTransactions(transaction)
// console.log(userAccount.getTransaction())

// //OU

const myUser = new UserAccount("000-000-000-00", "João", 25)
//    console.log(myUser.getCpf())
//    console.log(myUser.getName())
//    console.log(myUser.getAge())
//    myUser.setTransactions(transaction)
//    console.log(myUser.getTransaction())

   
//QUESTÃO 3


   const myAccounts= new Bank([])
   myAccounts.setAccounts(myUser)
   console.log(myAccounts.getAccounts())
//    myAccounts.setTransactions(transaction)
//    console.log(myAccounts.getTransaction())
   console.log("")