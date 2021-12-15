import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";


const signup = async(req:Request, res:Response) => {
   let errorCode:number = 400
    try {
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            errorCode = 422
            throw new Error("Insira corretamente as informações de 'name', 'email', 'password' e 'role'!")
        }

        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email)
        if(await user){
            errorCode = 409
            throw new Error("Esse email já está cadastrado!")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()
        

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}

export default signup