import { Request, Response } from "express";
import { connection } from "../data/connection";
import { PaymentMethod } from "../entities/PaymentMethod";
import { Buyer, TYPE_PAYMENT } from "../entities/Buyer";
import { IdGenerator } from "../services/IdGenerator";

export const createPayment = async(req:Request, res:Response) => {
    try {

        const {id_client, name, cpf, email, amount, type, card_name,card_number, card_date,card_cvv} = req.body

        if(!id_client || !name ||  !cpf || !email || !amount || !type){
            res.statusCode = 422
            throw new Error("Preencha os campos 'id_client','name', 'cpf', 'email', 'amount' e 'type'.")
        }

        const id = new IdGenerator().generateId()

        const newPurchase: Buyer = {
            id,
            id_client,
            name,
            cpf,
            email,
            amount,
            type
        }

        const paymentType = () => {
            if(type === TYPE_PAYMENT.BOLETO){
            return new PaymentMethod().boletoPayment()
            }else if (type === TYPE_PAYMENT.CARTAO){
                const newVarivel = {... newPurchase,
                card_name,card_number,card_date,card_cvv}
            if(!newVarivel.card_name || !newVarivel.card_number || !newVarivel.card_date || !newVarivel.card_cvv){
                res.statusCode = 422
                throw new Error("Preencha os campos 'card_name','card_number', 'card_date', 'card_cvv'.")
            }else{
                return "Cartão aprovado"
            }
            }
        }

        await connection("wirecard_purchase").insert(newPurchase)

       

        res.status(200).send({"Compra aprovada": paymentType()})
        
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}