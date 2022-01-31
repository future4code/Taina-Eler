import axios from "axios";
import { Adress } from "../types";
/*Escreva uma função que receba um CEP, faça uma requisição 
para a url https://viacep.com.br/ws/:cep/json/  e retorne um 
objeto contendo: */



export const returnAdress = async(cep: string) :Promise<Adress> => {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const dados = response.data
    return{
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    }
}