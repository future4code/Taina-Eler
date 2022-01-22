import app from "./app"
import { Request, Response } from "express"
import { Transaction, UserAccount } from "./types"
// import { Transaction, UserAccount } from "./types"

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello World!")
})


// const myAccount = new UserAccount("111-111-111-11", "alguem", 20)
// console.log(myAccount)
// const myTransfer = new Transaction("2021-12-06", 50, "pagando")
// myAccount.setTransactions(myTransfer)
// console.log(myAccount.getTransactions())

//QUESTÃO 1
//Instânciando a classe UserAccount

// const userAccount = new UserAccount("000-000-000-00", "João", 25)
// console.log(userAccount) //1b)é chamado uma vez
// userAccount.setTransactions(transaction)

//QUESTÃO 2

// const transaction = new Transaction("Pagamento efetuado",20,"20/02/2021")
// console.log(transaction)
const userAccount = new UserAccount("000-000-000-00", "João", 25)
// console.log(userAccount) //1b)é chamado uma vez
// userAccount.setTransactions(transaction)




// const myUser = new UserAccount('222.111.333-21','Jessica', 25)
//    console.log(myUser.getCpf())
//    console.log(myUser.getName())
//    console.log(myUser.getAge())
//    myUser.setTransactions(transaction)
//    console.log(myUser.getTransaction())
//    console.log("")