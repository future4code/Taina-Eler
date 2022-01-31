import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { hash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"

const signUp = async(req:Request, res:Response):Promise<void> => {
    try {
        
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            throw new Error("Parâmetros inválidos, verifique se name, email, password e role estão sendo passados!")
        }

        const id:string = generateId()

        const cypherPassword = await hash(password)

        await insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })
   
        const token: string = generateToken({
            id,
            role: role
        })
   
        res.status(201).send({ message: "Usuário criado!",token, role})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}

export default signUp