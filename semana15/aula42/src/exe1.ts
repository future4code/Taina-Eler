
//a)

const minhaString : string  = "exercício 1" 
// não posso atribuir número, pois está declarada com string

//b)

let meuNumero : number | string = 20
//pra que recebe também string => number | string

//c) e d)

enum Cores  {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1 : Pessoa = {
    nome: "Tainá",
    idade: 24,
    corFavorita: Cores.AZUL
}

const pessoa2 : Pessoa = {
    nome: "Julio",
    idade: 26,
    corFavorita: Cores.LARANJA
}

const pessoa3 : Pessoa = {
    nome: "João",
    idade: 24,
    corFavorita: Cores.VERDE
}
