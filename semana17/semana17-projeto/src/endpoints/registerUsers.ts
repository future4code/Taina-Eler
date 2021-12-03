import {Request, Response} from "express"
import connection from "../connection"
import { User } from "../types"

//Criar a tabela labecommerce_users
const   registerUsers = async (req: Request, res:Response):Promise<void> => {
    try {
        const {name, email, password} = req.body //desestruturação

        if(!name || !email || !password){
            throw new Error("Parametros inválidos!")
        }

        const user:User = {
            id:Date.now().toString(),
            name,
            email,
            password
        }

        await connection("labecommerce_users").insert(user)

        res.status(200).send("Usuário criado com sucesso")


    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}

export default registerUsers