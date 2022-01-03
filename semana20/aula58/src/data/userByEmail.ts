import { connection } from "../connection"
import { user } from "../types/user"

export const userByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result =  await connection("User_Arq")
         .select("*")
         .where({ email:email })

      return result[0]

   } catch (error:any) {
      throw new Error(error.slqMessage || error.message)
   }
}