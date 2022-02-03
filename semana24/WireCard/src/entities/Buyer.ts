export enum TYPE_PAYMENT {
    BOLETO = "BOLETO",
    CARTAO = "CARTAO"
}

export interface Credit_Card {
    card_name: string
    card_number: string
    card_date: string
    card_cvv: number
}

export interface Buyer{
    id: string
    id_client: string
    name: string
    cpf: string
    email: string
    amount: number
    type: TYPE_PAYMENT
    card ?: Credit_Card
}

