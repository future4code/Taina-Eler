import { Request, Response } from "express";
import connection from "../data/connection";
import { Product } from "../types";


const getAllProducts = async(req:Request, res:Response): Promise<void> => {
    try {
        const product: Product[] = await connection("labecommerce_products")
        res.status(200).send(product)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getAllProducts