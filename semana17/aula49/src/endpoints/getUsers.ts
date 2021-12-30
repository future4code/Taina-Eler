import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name || "%"
        const type = req.query.type || "%"

        const sort = req.query.sort === "id"?"id": "name"
        const order = req.query.order === "ASC"? "ASC" : "DESC"
        const page = Number(req.query.page) || 1
        const offset = Number(5*(page-1))

       const result = await connection("aula49_exercicio")
       .where("name", "LIKE", `%${name}%`)
       .orWhere("type", "LIKE", `%${type}%`)
       .orderBy(sort,order)
       .limit(5)
       .offset(offset)

       const users = result.map(user)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const user = (input:any) => {
    return{
       id: input.id,
       name:input.name,
       email:input.email,
       type:input.type
    }
 }