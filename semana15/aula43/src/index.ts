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
//Neste exercício quero como resposta um objeto com id e nome:
app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((country) => {
        return {id: country.id, name: country.name}
    })
    res.status(200).send(result)
})


//Endpoint 3 - Buscar país por filtro

app.get("/countries/search", (req: Request, res: Response) => {

    let result: country[] = countries
    let errorCode = 400

    try {
        if(!req.query.name && !req.query.capital && !req.query.continent){
            errorCode = 422
            throw new Error("Invalid Parameters")
        }

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

         res.status(200).send(result)
     
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

    // if (req.query.name) {
    //    result = result.filter(
    //       country => country.name.includes(req.query.name as string)
    //    )
    // }
    
    // if (req.query.capital) {
    //    result = result.filter(
    //       country => country.capital.includes(req.query.capital as string)
    //    )
    // }
    
    // if (req.query.continent) {
    //    result = result.filter(
    //       country => country.continent.includes(req.query.continent as string)
    //    )
    // }

    // if(result.length){
    //     res.status(200).send(result)
    // }else{
    //     res.status(401).send("Não encontrado")
    // }

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
app.put("/countries/:id", (req:Request, res:Response)=>{
    const id: string = req.params.id //depois preciso transformar em Number
    let errorCode: number = 400

    try {
        const index: number = countries.findIndex((country)=>{
            return country.id === Number(id)
        })

        if(index === -1){
            errorCode = 404
            throw new Error("Not Found!")
        }

        if(!req.body.name && !req.body.capital){
            errorCode=422
            throw new Error("Invalid Parameters")
        }

        //Caso tenha:

        if(req.body.name){
            countries[index].name = req.body.name
        }

        if(req.body.capital){
            countries[index].capital = req.body.capital
        }

        res.status(200).send("Country successfully updated!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


//Endpoint 5 - Deletando país

app.delete("/countries/:id", (req:Request, res:Response)=>{
    let errorCode: number = 400
    const id: string = req.params.id //depois preciso transformar em Number
    const authorization: string = req.headers.authorization as string

    try {
        //Validar a chave token
        if(!authorization || authorization.length < 10){
            errorCode = 401
            throw new Error("Unauthorized")
        }

        //achando o index do país a ser deletado
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
          );

        //Caso não seja encontrado
        if (countryIndex === -1) {
            errorCode = 404;
            throw new Error();
          }

        //Caso seja encrontrado
        countries.splice(countryIndex, 1);

        res.status(200).send("Delete Country successfully")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})


//Endpoint 6 - Criando país

app.post("/countries", (req:Request, res:Response)=>{
    let errorCode = 400
    const authorization: string = req.headers.authorization as string
    
    try {
        if(!authorization || authorization.length < 10){
            errorCode = 401
            throw new Error("Unauthorized")
        }

        if (!req.body.name && !req.body.capital && !req.body.continent) {
            throw new Error("Invalid Parameters");
        }

        const countryName: number = countries.findIndex(
            (country) => country.name === req.body.name
          );
      
          if (countryName !== -1) {
            errorCode = 409;
            throw new Error("country already exists");
          }
      
          const newCountry: country = {
            id: Date.now(),
            name: req.body.name,
            capital: req.body.capital,
            continent: req.body.continent,
          };
      
          countries.push(newCountry);
      
          //deu tudo certo
          res.status(200).send({ message: "Success!", conuntry: newCountry });
    } catch (error: any) {
        res.status(errorCode).send(error.message);
        
    }
})
/*--------------------------------Rodando o servidor-------------------------------*/

app.listen(3003, () => {
    console.log("Servidor pronto!")
})