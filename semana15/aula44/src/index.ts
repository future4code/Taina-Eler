import express, { Request, Response } from "express"
import cors from "cors"
import { TYPE, User } from "./types"
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//Exercício 1 - Endpoint de buscar todos os usuários 

app.get("/users", (req: Request, res: Response) => {
    // res.send(users)
    let codeError: number = 400
    try {
        if (!users) {
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(users)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//Exercício 3 - Endpoint que busque usuários por nome

app.get("/users/search", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const name: string = req.query.name as string

        const user: User[] | undefined = users.filter((user) => user.name === name)

        if (!user) {
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//Exercício 2 - Endpoint que busque todos os usuários que tenham uma propriedade type específica
app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const type: string = req.params.type.toUpperCase()

        const user = users.filter((user) => user.type === type)

        if (!user) {
            codeError = 404
            throw new Error("Users not found!")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//Exercício 4 - Endpoint que cria usuários
app.post("/users", (req: Request, res: Response) => {
    
    try {
        const { name, email, age } = req.body
        let type: string = req.body.type

        if (!name || !email || !type || !age) {
            throw new Error("Missing parameters!")
        }

        if (typeof name !== "string") {
            throw new Error("Invalid name")
        }

        if (typeof email !== "string") {
            throw new Error("Invalid email")
        }

        if (typeof age !== "number") {
            throw new Error("Invalid age")
        }

        type = type.toUpperCase()
        if (!(type in TYPE)) {
            throw new Error("Invalid type")
        }

        users.forEach((user) => {
            if (user.email === email) {
                throw new Error("Already exist!")
            }
        })

        const newUser: User = {
            id: Date.now(),
            name,
            email,
            type: type === TYPE.ADMIN? TYPE.ADMIN: TYPE.NORMAL,
            age
        }

        users.push(newUser)

        res.status(201).send("Created User!")

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})

//Exercício 5 - Endpoint que altera nome no usuário
app.put("/users/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-ALTERADO"
        }
      })

      res.status(200).end()
    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
  })


  //Exercício 6 - Endpoint que altera nome no usuário
  app.patch("/users/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-REALTERADO"
        }
      })

      res.status(200).end()
    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
  })


  //Exercício 7 - Endpoint que deleta um usuário
  app.delete("/users/:id", (req:Request, res:Response) =>{
      try {
          const id = Number(req.params.id)

          if(isNaN(id)){
              throw new Error("Invalid ID!")
          }
     
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
              users.splice(i, 1)

            }
          }
         res.status(200).send("Deleted User!")
      } catch (error:any) {
        res.status(400).send({ message: error.message })
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
