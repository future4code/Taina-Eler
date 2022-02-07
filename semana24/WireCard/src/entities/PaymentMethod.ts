import { Credit_Card } from "./Buyer"


export class PaymentMethod {

    public boletoPayment = ()=> {
            let array = []
            for(let i:number = 0; i < 48; i++){
              const n = Math.floor(Math.random() * 10)
              array.push(n)
            }
            return array.join('')
    }

}