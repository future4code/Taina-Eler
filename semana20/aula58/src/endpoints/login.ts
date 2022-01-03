import { Request, Response } from "express";
import { userByEmail } from "../data/userByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { user } from "../types/user";

const login = async(req:Request, res:Response):Promise<void> => {
    try {
        
        const {email, password} = req.body

        if(!email || !password){
            throw new Error("Verifique se está sendo passado o email e a senha!")
        }

        const user:user = await userByEmail(email)

        if(!user){
            throw new Error("Usuário ou senha incorretos")
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.id,
         role: user.role
      })

      res.send({
         message: "Usuário logado!",
         token,
         role: user.role
      })

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}

export default login