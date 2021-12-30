import express from "express"
import cors from "cors"
import {AddressInfo} from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { orderByNameAndType } from "./endpoints/orderByNameAndType"
import { getUsersByPage } from "./endpoints/getUsersByPage"
import { getUsers } from "./endpoints/getUsers"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 })

 //Buscar todos os usuários
 app.get("/users", getAllUsers)

  //Buscar usuários com ordenação e paginação
  app.get("/user/all", getUsers)

 //Buscar usuário por nome
 app.get("/user/name", getUserByName)

 //Buscar usuário por tipo
 app.get("/user/type", getUserByType)

 //Buscar usuário por nome ou tipo e com ordenação
 app.get("/user/ordenacao", orderByNameAndType)

 //Buscar usuários com paginação
 app.get("/user/paginacao", getUsersByPage)

 