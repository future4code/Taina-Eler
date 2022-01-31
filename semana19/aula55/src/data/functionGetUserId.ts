
import { connection } from "./connection"

const functionGetUserId = async(
    id:string
):Promise<any> => {

    const result = await connection
    .select("*")
    .from("aula55_User")
    .where({ id });

  return result[0];
}
export default functionGetUserId