import { Request, Response } from "express";
import connection from "../data/connection";
import { Product} from "../types";



const resisterProducts = async(req:Request, res:Response): Promise<void> => {
    try {
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            throw new Error("Parâmetros inválidos")
        }

        const product: Product = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        await connection("labecommerce_products").insert(product)

        res.send({message:"Produto criado com sucesso"})


    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default resisterProducts


