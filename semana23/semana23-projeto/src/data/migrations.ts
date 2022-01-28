import { connection } from "./connection"
import pokemons from "../dataPokemon/pokemonGo.json"



const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
        CREATE TABLE IF NOT EXISTS pokemonGo(
            id VARCHAR(255) ,
            name VARCHAR(255) NOT NULL,
            pokedexNumber VARCHAR(255),
            imgName VARCHAR(255),
            generation VARCHAR(255),
            evolutionStage VARCHAR(255),
            evolved VARCHAR(255),
            familyID VARCHAR(255),
            crossGen VARCHAR(255),
            type1 VARCHAR(255),
            type2 VARCHAR(255),
            weather1 VARCHAR(255),
            weather2 VARCHAR(255),
            statTotal VARCHAR(255),
            ATK VARCHAR(255),
            DEF VARCHAR(255),
            STA VARCHAR(255),
            legendary VARCHAR(255),
            aquireable VARCHAR(255),
            spawns VARCHAR(255),
            regional VARCHAR(255),
            raidable VARCHAR(255),
            hatchable VARCHAR(255),
            shiny VARCHAR(255),
            nest VARCHAR(255),
            new VARCHAR(255),
            notGettable VARCHAR(255),
            futureEvolve VARCHAR(255),
            CP40 VARCHAR(255),
            CP39 VARCHAR(255)
);

`)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const insertPokemon = () => connection("pokemonGo")
   .insert(pokemons)
   .then(() => { console.log("Pokemons inseridos.") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertPokemon)
   .finally(closeConnection)