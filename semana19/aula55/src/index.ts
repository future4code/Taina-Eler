import { Request, Response} from "express"
import app from "./app"
import createUser from "./endpoints/createUser"


app.get("/", (req, res) => {
    res.send("hello world!")
})

//criar usuário

app.post("/user/signup", createUser)


