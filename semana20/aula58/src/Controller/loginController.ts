import { Request, Response } from "express";
import { loginBusiness } from "../Business/loginBusiness";
import { userByEmail } from "../data/userByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { user } from "../types/user";

const loginController = async(req:Request, res:Response):Promise<void> => {
    try {
        
        const {email, password} = req.body

        const token = await loginBusiness({email,password})


      res.send({
         message: "Usuário logado!",
         token
      })

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}

export default loginController