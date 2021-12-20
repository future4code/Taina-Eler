export type Transacao = {
    valor: number,
    data: Date,
    descricao:string
}


export type Conta = {
    nome:string,
    cpf:string,
    dataDeNascimento:Date,
    saldo: number,
    extrato: Array<Transacao>

}