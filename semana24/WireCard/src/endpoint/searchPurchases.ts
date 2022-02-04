import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchPurchases = async(req:Request, res:Response) => {
    try {

        const [result] = await connection.raw(`
            SELECT C.name, B.name, B.amount, B.type, B.status 
            FROM wirecard_client as C
            JOIN wirecard_purchase as B ON C.id = B.id_client;
        `)

        if(result.length === 0){
            throw new Error("Nenhuma compra registrada!")
        }


        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}