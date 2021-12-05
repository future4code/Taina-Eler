import { Request, Response } from "express";
import connection from "../data/connection";
import { Product, Purchase, User } from "../types";


const purchaseRecord = async(req:Request, res:Response): Promise<void> => {
    try {
        const {user_id,product_id, quantity} = req.body

        const [user]: User[] = await connection("labecommerce_users")
        .select()
        .where({ id: user_id})

        if(!user){
            throw new Error("usuário não encontrado")
        }

        // const [products] desestruturação, isso seria igual a products[0]

        const [product]: Product[] = await connection("labecommerce_products")
        .select()
        .where({ id: product_id})

        if(!product){
            throw new Error("produto não encontrado")
        }

        const total_price = product.price * quantity

        const purchase: Purchase = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await connection("labecommerce_purchases").insert(purchase)

        res.send({message: "Compra realizada com sucesso"})


    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default purchaseRecord