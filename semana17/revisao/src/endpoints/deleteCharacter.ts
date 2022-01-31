import { Request, Response } from "express"
import { connection } from "../connection"


const deleteCharacter = async(
    req:Request, 
    res:Response
    ):Promise<void> => {
         
        try {
         const {id} = req.params

        // const index: number = characters.findIndex((character) => 
        //     character.id === Number(id)
        //     )

        // if(index > -1){
        //     characters.splice(index, 1)
        // }

        await connection("character_rev")
          .delete()
          .where({id:id})

        res.status(200).end() 

        } catch (error) {
            res.status(500).end()
        }
    
}

export default deleteCharacter