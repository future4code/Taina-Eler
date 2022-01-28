import { Request, Response } from "express";
import app from "./app";
import { searchByGeneration } from "./endpoints/searchByGeneration";
import { searchByName } from "./endpoints/searchByName";
import { searchByTypeGeneration } from "./endpoints/searchByTypes";

app.get("/", (req:Request, res:Response)=>{
    res.send("Helloo World")
})

//Buscar por nome ou letras do nome
app.get("/pokemon/name", searchByName)

//Buscar por tipo1 ou tipo2 ou geração geração
app.get("/pokemon/tg", searchByTypeGeneration)

//Buscar por geração
app.get("/pokemon/:generation", searchByGeneration)