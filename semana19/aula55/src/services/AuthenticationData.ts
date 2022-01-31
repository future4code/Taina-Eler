import { JwtPayload, sign, verify } from "jsonwebtoken";
import { Authenticator } from "../types";

class AuthenticationData {
    generateToken = (id: Authenticator) => {
        const token = sign(
            id,
            process.env.JWT_SECRET as string,
            {expiresIn: "24hr"}
    
        )
        return token
    }

    getTokenData = (token:string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_SECRET as string//se eu passar mais caracteres vai dar assinatura inválida, pois não condiz com a palavra secreta que passei no token
            ) as JwtPayload

            return {
                id: tokenData.id
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export default AuthenticationData