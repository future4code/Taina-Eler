import { Request, Response } from "express";
import { userByEmail } from "../data/userByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { login, user } from "../types/user";

export const loginBusiness = async(login:login):Promise<string> => {
    
        
        

        if(!login.email || !login.password){
            throw new Error("Verifique se está sendo passado o email e a senha!")
        }

        const user:user = await userByEmail(login.email)

        if(!user){
            throw new Error("Usuário ou senha incorretos")
        }

        const passwordIsCorrect: boolean = await compare(login.password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.id,
         role: user.role
      })

     return token

    
}

