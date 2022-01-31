import { Request, Response } from "express"
import { signUpBusiness } from "../Business/signUpBusiness"


const signUpController = async(req:Request, res:Response):Promise<void> => {
    try {
        
        const {name, email, password, role} = req.body

        const token:string = await signUpBusiness({name, email, password, role})
   
        res.status(201).send({ message: "Usuário criado!",token, role})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}

export default signUpController