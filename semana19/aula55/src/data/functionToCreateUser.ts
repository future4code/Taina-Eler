import { connection } from "../connection"

const functionToCreateUser = async(
    id:string,
    email:string,
    password:string
):Promise<void> => {

    await connection("aula55_User")
    .insert({
        id:id,
        email:email,
        password:password
    })
}

export default functionToCreateUser