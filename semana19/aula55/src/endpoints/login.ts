import { Request, Response } from "express"
import { connection } from "../data/connection"
import functionGetUser from "../data/functionGetUser"
import functionToCreateUser from "../data/functionToCreateUser"
import AuthenticationData from "../services/AuthenticationData"
import IdGeneration from "../services/generateId"


const login = async(req:Request, res:Response):Promise<void> => {
    try {
        const {email, password} = req.body

        if(!email || !password || email.indexOf("@")===-1){
            res.statusCode = 422
         throw new Error("Preencha os campos 'email' e 'password'")
        }

        //VERIFICAR SE O USUÁRIO JÁ EXISTE
        const user = await functionGetUser(email)

        if (!user || user.password !==password) {
            res.statusCode = 401
            res.statusMessage = "Credenciais inválidas"
             throw new Error()
        }

        //VAI GERAR O TOKEN E DEVOLVE-LO

        const token = new AuthenticationData().generateToken({id:user.id})

        res.status(200).send({token});
    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}

export default login



