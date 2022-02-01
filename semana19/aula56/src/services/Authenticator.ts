import { sign } from "jsonwebtoken"
import { authenticatorData } from "../types"

export class Authenticator {

    generateToken = (payload:authenticatorData)=>{
        const token = sign(
            payload,
            process.env.JWT_SECRET as string
        )

        return token
    }


    getToken = ()=>{}
}