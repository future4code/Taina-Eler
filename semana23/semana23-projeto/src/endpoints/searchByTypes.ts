import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchByTypes = async(req:Request, res:Response) => {
    try {
        const {type1, type2} = req.query 

        const [result]= await connection.raw(`
            SELECT * FROM pokemonGo
            WHERE type1 = "${type1}" OR type2 = "${type2}";
        `);

        res.status(200).send(result)


    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}