import { Request, Response } from "express"
import functionGetUserId from "../data/functionGetUserId";
import AuthenticationData from "../services/AuthenticationData";

const getUser =  async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
  
     //VERIFICAR SE O TOKEN É VÁLIDO
      const tokenData = new AuthenticationData().getTokenData(token);

      if(!tokenData){
         res.statusCode = 401
         res.statusMessage = "Token invalido"
         throw new Error()
      }
  
      const user = await functionGetUserId(tokenData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }

export default getUser