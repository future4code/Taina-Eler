//labecommerce_purchases
/*- `**id**`: string (PRIMARY KEY)
- `**user_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_users**`
- `**product_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_products**`
- `**quantity**`: number
- `**total_price**`: number (float) */


import { Request, Response } from "express";
import connection from "../connection";
import { Product, Purchase, User } from "../types";


const purchaseRecord = async(req:Request, res:Response): Promise<void> => {
    try {
        const {product_id, user_id, quantity} = req.body

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
            product_id,
            user_id,
            quantity,
            total_price
        }

        await connection("labecommerce_purchase").insert(purchase)

        res.send({message: "Produto criado com sucesso"})


    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default purchaseRecord