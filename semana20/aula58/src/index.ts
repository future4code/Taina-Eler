import { Request, Response } from "express"
import app from "./app"
import { connection } from "./connection"
import loginController from "./Controller/loginController"
import signUpController from "./Controller/signUpController"



app.get("/", async function(req:Request,res:Response){
   res.send(await connection.raw('show tables'))
})

app.post("/signup", signUpController)
app.post("/login", loginController)

