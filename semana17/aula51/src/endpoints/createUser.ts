import { Request, Response } from "express";
import { connection } from "../data/connection";
import { mailTransporter } from "../services/mailTransporter";
import { user } from "../types";
import { userRefator } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, cep, numero, complemento } = req.body

      if (!name || !nickname || !email || !cep || !numero) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' , 'cep' e 'numero' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: userRefator = { id, name, nickname, email, cep, numero, complemento  }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}