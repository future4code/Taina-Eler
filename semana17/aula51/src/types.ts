export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type Adress = {
   logradouro: string,
   bairro: string,
   cidade: string,
   estado: string
}


export type userRefator = {
   id: string
   name: string
   nickname: string
   email: string
   cep: number
   numero: number
   complemento: string
}