import { Request, Response } from "express";
import { connection } from "../data/connection";

export const countPokemonsGeneration = async(req:Request, res:Response):Promise<void> => {
    try {

        const generation = req.query.generation || "%"

        const [existGeneration] = await connection("pokemonGo")
            .where("generation", "LIKE", `%${generation}%`)
            
        if(!existGeneration){
            throw new Error("Geração não existe")
        }


        const result = await connection("pokemonGo")
            .count()
            .where("generation", "LIKE", `%${generation}%`)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}