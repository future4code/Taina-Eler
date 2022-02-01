import { Request, Response } from "express";
import connection from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGeneration";
import { user } from "../types";

export const createUser =  async (req: Request, res: Response):Promise<void> => {
    try {

        const {email, password} = req.body
            if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password' ")
            }

        const [user] = await connection("aula56_users")
            .where({email})
        
            if(user){
                res.statusCode = 409
                throw new Error('Email já cadastrado')
            }
        

        //gerar o id
        const id:string = new IdGeneration().generateId()

        //antes de slvar no banco, tenho que criptografar
        const cypherPassword:string = new HashManager().generateHash(password)

        const newUser:user = {
            id,
            email,
            password : cypherPassword
        }
        //Inserir na tabela
        await connection("aula56_users")
            .insert(newUser)

        //autenticar, ou seja, gerar o token

        const token = new Authenticator().generateToken({id})

        res.status(201).send({newUser,token})
      
    } catch (error:any) {
      res.status(400).send({message: error.message,});
    }
  };