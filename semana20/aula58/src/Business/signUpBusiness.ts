import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { hash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"
import { user } from "../types/user"

export const signUpBusiness = async (user: any): Promise<string> => {



    if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Parâmetros inválidos, verifique se name, email, password e role estão sendo passados!")
    }

    const id: string = generateId()

    const cypherPassword = await hash(user.password)

    await insertUser({
        id,
        name: user.name,
        email: user.email,
        password: cypherPassword,
        role: user.role
    })

    const token: string = generateToken({
        id,
        role: user.role
    })

    return token

}

