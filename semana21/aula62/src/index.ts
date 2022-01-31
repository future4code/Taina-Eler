import { User } from "./types";

export const performPurchase = (usuario: User, valor: number): User | undefined => {

    if(usuario.saldo >= valor){
        return{
            ...usuario,
            saldo : usuario.saldo - valor
        }
    }
    return undefined
}