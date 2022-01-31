import { connection } from "./connection"

const functionGetUser = async(
    email:string
) => {

   const result =  await connection
    .select("*")
    .from("aula55_User")
    .where({email})

    return result[0]
}

export default functionGetUser