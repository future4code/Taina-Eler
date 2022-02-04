import { Request, Response } from "express";
import { connection } from "../data/connection";
import { PaymentMethod } from "../entities/PaymentMethod";
import { Buyer, TYPE_PAYMENT } from "../entities/Buyer";
import { IdGenerator } from "../services/IdGenerator";

export const createPayment = async(req:Request, res:Response) => {
    try {

        const {id_client, name, cpf, email, amount, type, card_name,card_number, card_date,card_cvv} = req.body

        if(!id_client || !name || !amount || !type){
            res.statusCode = 422
            throw new Error("Preencha os campos 'id_client:1-Padaria, 2-Mercado, 3-Papelaria','name', 'cpf', 'email', 'amount' e 'type'.")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        if (!cpf || cpf.length !== 11) {
            throw new Error("CPF inválido");
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

        const paymentType = async() => {
            if(type === TYPE_PAYMENT.BOLETO){
                return new PaymentMethod().boletoPayment()
            }


            if(type === TYPE_PAYMENT.CARTAO){
                const purchaseCard = {... newPurchase,
                card_name,card_number,card_date,card_cvv}

                
                    
                if(!purchaseCard.card_name || !purchaseCard.card_number || purchaseCard.card_number.toString().length !==16  || !purchaseCard.card_date || !purchaseCard.card_cvv || purchaseCard.card_cvv.toString().length !==3){
                    res.statusCode = 422
                    throw new Error("Preencha os campos 'card_name','card_number', 'card_date', 'card_cvv'.")
                }else{
                    return "Cartão aprovado"
                }

            }
        }

        await connection("wirecard_purchase").insert(newPurchase)

        res.status(200).send({"Compra aprovada": await paymentType()})
        
    } catch (error:any) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}