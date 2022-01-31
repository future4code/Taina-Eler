import { Request, Response } from "express"
import { connection } from "../data/connection"
import functionToCreateUser from "../data/functionToCreateUser"
import AuthenticationData from "../services/AuthenticationData"
import IdGeneration from "../services/generateId"


const createUser = async(req:Request, res:Response):Promise<void> => {
    try {
        const {email, password} = req.body

        if(!email || !password || email.indexOf("@")===-1 || password.length < 6){
            res.statusCode = 422
         throw new Error("Preencha os campos 'email' e 'password'")
        }

        //VERIFICAR SE O USUÁRIO JÁ EXISTE
        const [user] = await connection("aula55_User")
            .where({email})

        if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        //GERAR ID
        const id = new IdGeneration().generateId()

        await functionToCreateUser(id,email,password)

        //PEGAR O TOKEN

        const token = new AuthenticationData().generateToken({id})

        res.status(200).send({token});
    } catch (error:any) {
        res.status(400).send({message: error.message});
    }
}

export default createUser