import express, { Request, Response } from "express"
import cors from "cors"
import { User } from "./types"
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())
//Endpoint de buscar todos os usuários vou usar um get

app.get("/users", (req: Request, res: Response) => {
    // res.send(users)
    let codeError: number = 400
    try{
        if(!users){
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(users)
    }catch(error: any){
        res.status(codeError).send({message: error.message})
    }
})

//Endpoint que busque usuários por nome

app.get("/users/search", (req: Request, res: Response) => {
    let codeError: number = 400
    try{
        const name : string = req.query.name as string

        const user: User[]| undefined = users.filter((user) => user.name===name)

        if(!user){
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(user)
    }catch(error: any){
        res.status(codeError).send({message: error.message})
    }
})

//Endpoint que busque todos os usuários que tenham uma propriedade type específica
app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400
    try{
        const type : string = req.params.type.toUpperCase() 

        const user = users.filter((user) => user.type === type)

        if(!user){
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(user)
    }catch(error: any){
        res.status(codeError).send({message: error.message})
    }
})

/*SERVIDOR*/
app.listen(3003, () => {
    console.log("The server is ready to use!")
})

// UMA FORMA DE BUSCA USANDO QUERY TANTO PARA type quanto para name
// app.get("/users/search", (req: Request, res: Response) => {
//     let codeError: number = 400
//     try{
//         const type : TYPE = req.query.type as TYPE
//         const name : string = req.query.name as string

//         const user = users.filter((user) => user.type === type || user.name===name)

//         if(!user){
//             codeError = 404
//             throw new Error("Users not found!")
//         }
//         res.status(200).send(user)
//     }catch(error: any){
//         res.status(codeError).send({message: error.message})
//     }
// })
