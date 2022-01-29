import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchByStatTotal = async(req:Request, res:Response) => {
    try {
        const {value1, value2} = req.query 

        const [result]= await connection.raw(`
            SELECT * FROM pokemonGo
            WHERE statTotal BETWEEN '${value1}' AND '${value2}';
        `);

        res.status(200).send(result)


    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}