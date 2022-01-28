import { Request, Response } from "express";
import app from "./app";
import { searchByName } from "./endpoints/searchByName";

app.get("/", (req:Request, res:Response)=>{
    res.send("Helloo World")
})

app.get("/pokemon/:name", searchByName)