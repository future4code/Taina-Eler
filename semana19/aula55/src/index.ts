import { Request, Response} from "express"
import app from "./app"
import createUser from "./endpoints/createUser"
import getUser from "./endpoints/getUser"
import login from "./endpoints/login"



app.get("/user/profile", getUser)

//criar usuário

app.post("/user/signup", createUser)

//login
app.post("/user/login", login)

