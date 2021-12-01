import { connection } from "./connection"
import users from "./users.json"
import infoAdressUsers from "./infoAdressUsers.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS aula51_infoAdUsers (
         id VARCHAR(255) PRIMARY KEY,
         cep INT NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados!") })
   .catch(printError)

const insertAdressUsers = () => connection("aula51_infoAdUsers")
   .insert(infoAdressUsers)
   .then(() => { console.log("Endereços inseridos!") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertAdressUsers)
   .finally(closeConnection)
