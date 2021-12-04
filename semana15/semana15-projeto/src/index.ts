import app from "./app"
import {Request, Response} from "express"

//Endpoint de verificação:
app.get("/", (req: Request, res: Response) => {
   res.send("Hello World!")
})