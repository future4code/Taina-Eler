import { Personagem } from "./types";

export const validaPersonagem = (personagem:Personagem):boolean => {

    if(!personagem.nome||
        personagem.vida === undefined||
        personagem.defesa === undefined ||
        personagem.forca === undefined ){

            return false;
        };

    if( personagem.vida<=0 || 
        personagem.defesa<=0 || 
        personagem.forca<=0){

            return false;
        };

    return true   ;
}