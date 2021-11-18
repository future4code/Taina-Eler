import express, {Express, Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"
import {CONTINENTS, country} from "./types"


/*------------------------------Criando servidor-------------------------------*/
const app: Express = express()

app.use(express.json())
app.use(cors())

/*-------------------------------Requisições com seus Métodos-------------------------------
Os endpoints não obedecem uma ordem númerica, pois isso geraria erros nas requisições     */

//teste
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
}) //Funcionando

//Endpoint 1 - Buscar todos os países
app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((country) => {
        return {id: country.id, name: country.name}
    })
    res.status(200).send(result)
})


//Endpoint 3 - Buscar país por filtro

app.get("/countries/search", (req: Request, res: Response) => {

    let result: country[] = countries

    if (req.query.name) {
       result = result.filter(
          country => country.name.includes(req.query.name as string)
       )
    }
    
    if (req.query.capital) {
       result = result.filter(
          country => country.capital.includes(req.query.capital as string)
       )
    }
    
    if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
       )
    }

    if(result.length){
        res.status(200).send(result)
    }else{
        res.status(401).send("Não encontrado")
    }

})

//Endpoint 2 - Buscar país por id
app.get("/countries/:id", (req: Request, res:Response) => {
    const id = req.params.id

    const result: country | undefined = countries.find((country) => {
        return country.id === Number(id)
    })

    if(result){
        res.status(200).send(result)
    }else{
        res.status(401).send("País não encontrado")
    }
})

//Endpoint 4 - Editar país
// app.put("/countries/:id", (req: Request, res: Response) => {
//     const id = req.params.id

//     const body = req.body
// })


/*--------------------------------Rodando o servidor-------------------------------*/

app.listen(3003, () => {
    console.log("Servidor pronto!")
})