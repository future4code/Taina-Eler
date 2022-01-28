import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchByName = async(req:Request, res:Response):Promise<void> => {
    try {
        const {name} = req.params

        if(!name){
            throw new Error("Insira o nome")
        }

        const existName = await connection("pokemonGo").where({name})
        if(!existName){
            throw new Error("Pokemon não cadastrado")
        }

        const result = await connection("pokemonGo").where({name})

        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}