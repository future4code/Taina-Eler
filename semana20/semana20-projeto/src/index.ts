import { Request, Response } from "express";
import app from "./controller/app";

//Endpoint de teste
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!")
})