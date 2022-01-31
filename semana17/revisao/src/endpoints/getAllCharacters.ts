import { Request, Response } from "express";
import { connection } from "../connection";
import { character } from "../types"

const getAllCharacters = async(req:Request, res:Response) : Promise<void> => {
    try {

        const {name, orderBy, orderType, page}  = req.query

        const resultsPerPage:number = 5
        const offset = 5*(Number(page) -1)

        const characters:character[] = await connection("character_rev")
          .where("name", "LIKE", `%${name}%`)
          .orderBy(orderBy as string|| "name", orderType as string)
          .offset(offset)


     res.send(characters)

    } catch (error) {
        res.status(500).send("unexpected server error")
    }

    
}

export default getAllCharacters