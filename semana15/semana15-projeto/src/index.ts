import app from "./app"
import {Request, Response} from "express"
import {contas} from "./accounts"
//Endpoint de verificação:
app.get("/", (req: Request, res: Response) => {
   res.send("Hello World!")
})

app.get("/users", (req:Request, res:Response) => {
   try {
      if(!contas.length){
         res.statusCode = 404
         throw new Error("Nenhuma conta encontrada!")
      }
      res.status(200).send(contas)
   } catch (error:any) {
      res.send(error.message)
   }
})

app.post("/users", (req:Request, res:Response) => {
   try {
      const {nome, cpf, dataDeNascimentoAsString} = req.body

      const [dia, mes, ano] = dataDeNascimentoAsString.split("/") //dia-mes-ano

      const dataDeNascimento:Date = new Date(`${ano}-${mes}-${dia}`)
      //validar as entradas da requisição


      const idadeEmMiliSegundos:number = Date.now() - dataDeNascimento.getTime() //getTime é um timestamp em milisegundos

      const idadeEmAnos:number = idadeEmMiliSegundos /1000 /60 /60 /24 /365

      if(idadeEmAnos < 18){
         res.statusCode = 406
         throw new Error("Idade deve ser maior que 18 anos!")
      }


      //consultar ou alterar a base de dados
      

      contas.push({
         nome:nome,
         cpf:cpf,
         dataDeNascimento:dataDeNascimento,
         saldo: 0,
         extrato: []
      })
      //valida os resultados da consulta
      //enviar a resposta

      res.status(201).send("Conta criada com sucesso!")
   } catch (error:any) {
      console.log(error)
      res.send(error.message)
   }
})