import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchSpecificTypes = async(req:Request, res:Response) => {
    try {
        const {type1, type2} = req.query 


        if(!type1 || !type2 ){
            throw new Error("Insira os parâmetros obrigatórios!")
        }

        const [existType1] = await connection("pokemonGo")
            .where("type1", "LIKE", `%${type1}%`)
            
        if(!existType1){
            throw new Error("Tipo não existe")
        }

        const [existType2] = await connection("pokemonGo")
            .where("type2", "LIKE", `%${type2}%`)
            
        if(!existType2){
            throw new Error("Tipo não existe")
        }


        const [result]= await connection.raw(`
            SELECT * FROM pokemonGo
            WHERE type1 = "${type1}" AND type2 = "${type2}";
        `);

        res.status(200).send(result)


    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}