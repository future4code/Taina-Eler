import { sign } from "jsonwebtoken";
import { Authenticator } from "../types";


const AuthenticationData = (id: Authenticator) => {
    const token = sign(
        id,
        process.env.JWT_SECRET as string,
        {expiresIn: "1min"}

    )
    return token
}

export default AuthenticationData