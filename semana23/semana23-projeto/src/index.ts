import { Request, Response } from "express";
import app from "./app";
import { countPokemonsGeneration } from "./endpoints/countPokemonsGeneration";
import { searchByGeneration } from "./endpoints/searchByGeneration";
import { searchByName } from "./endpoints/searchByName";
import { searchByStatTotal } from "./endpoints/searchByStatTotal";
import { searchByTypes } from "./endpoints/searchByTypes";
import { searchSpecificTypes } from "./endpoints/searchSpecificTypes";


//Buscar por nome ou letras do nome
app.get("/pokemon/name", searchByName)

//Buscar por tipo1 ou tipo2 
app.get("/pokemon/type", searchByTypes)

//Buscar por tipo1 e tipo2
app.get("/pokemon/types", searchSpecificTypes)

//Buscar por quantidade passando ou não a geração
app.get("/pokemon/count", countPokemonsGeneration)

//Buscar por pokemon com stat entre dois valores
app.get("/pokemon/stat", searchByStatTotal)

//Buscar por geração
app.get("/pokemon/:generation", searchByGeneration)


