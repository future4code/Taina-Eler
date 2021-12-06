import app from "./app"
import { Request, Response } from "express"
import { Transaction, UserAccount } from "./types"

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello World!")
})


const myAccount = new UserAccount("111-111-111-11", "alguem", 20)
console.log(myAccount)
const myTransfer = new Transaction("2021-12-06", 50, "pagando")
myAccount.setTransactions(myTransfer)
console.log(myAccount.getTransactions())