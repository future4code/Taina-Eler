# Aula 47 - Knex.js 


### Exercício 1 

a)Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

-- A utilização de strings permite utilizarmos caracteres especiais o que dificulta ainda mais conseguir descobrir esse id. Sim.

b)A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id:

```
import { v4 } from "uuid"

const generateId = ():string => {
    return v4()
}


### Exercício 2

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:


```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
a)Explique o código acima com as suas palavras.

-- É fornecida uma conexão com o banco de dados através do knex, para a tabela chamada User. Então, a utiizada uma função de criação de usuários que insere os parâmetros na tabela.


b)Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas:
```
CREATE TABLE aula55_User(  
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```


### Exercício 3

a)O que a linha as string faz? Por que precisamos usar ela ali?:

-- Reforça que se trata de uma string.


b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um GET (/actor);
* Receber o gênero como um query param (/actor?gender=);
* Devolver a quantidade de atores/atrizes desse gênero.

**_Para esse endpoint será utilizada a função #returnQuant# na letra c do exercício 1._**
```
app.get("/actor", async(req:Request, res:Response) => {
    try {
        const gender: string = req.query.gender as string
        const quantidade = await returnQuant(gender)
        res.status(200).send(quantidade)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})
```


### Exercício 4

a)Crie um endpoint agora com as seguintes especificações:
* Deve ser um PUT (/actor);
* Receber o salário e o id pelo body;
* Simplesmente atualizar o salário do ator com id em questão .

```
app.put("/ator", async(req:Request, res:Response) => {
    const salary = req.body.salary
    const id = req.body.id
    try {
        await connection("Actor")
    .update({salary: salary})
    .where({id: id});

    res.status(200).send("Success!")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
    
})
```

b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um DELETE (/actor/:id);
* Receber id do ator como path param;
* Simplesmente deletar o ator da tabela.

```
app.delete("/ator/:id", async(req:Request, res:Response) => {
    const id = req.params.id
    try {
        await connection("Actor")
        .delete()
        .where({id:id})

        res.status(200).send("Ator deletado")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

```


### Exercício 5
Criar um endpoint com as especificações:
* Deve ser um POST (/movie);
* Receber todas as informações pelo body;
* Criar o filme na tabela.

Função para criar o filme:
```
const createMovie = async(
    id:string,
    title:string,
    synopsis:string,
    launch_date:Date

):Promise<void> => {
    await connection
    .insert({
        id: id,
        title:title,
        synopsis:synopsis,
        launch_date:launch_date
    })
    .into("Movies")
}
```

Requisição:
```
app.post("/movie", async(req:Request, res:Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.launch_date
        )

        res.status(200).send("Filme criado")
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }

})
```


### Exercício 6
Criar um endpoint com as especificações:
* Deve ser um GET (/movie/all);
* Não recebe nada;
* Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens.

Função de retornar no máximo 15 filme:
```
const return15Movies = async():Promise<any> => {
    const resultado = await connection
    .limit(15)
    .into("Movies")

    return resultado
}

```

Requisição:
```
app.get("/movie/all", async(req:Request, res:Response) => {
    try {
        const result = await return15Movies()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
})
```


### Exercício 7
Criar um endpoint com as especificações:
* Deve ser um GET (/movie/search);
* Deve receber o termo de busca como uma query string (/movie/search?query=);
* Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento.

Função de retornar o filme pelo termo de busca no nome ou sinopse:

**MÉTODO RAW**
```
const returnTermo = async(palavra:string):Promise<any> => {
    const resultado = await connection.raw(`
    SELECT * FROM Movies
     WHERE title LIKE "%${palavra}%" OR synopsis LIKE "%${palavra}%"
     ORDER BY launch_date ASC;
    `)  
    return resultado[0]
}
```

**QUERY BUILDER**
```
const returnTermo = async(palavra:string):Promise<any> => {
    const resultado = await connection("Movies")
    .where("title", "like", `%${palavra}%`)
    .orWhere("synopsis", "like", `%${palavra}%`)
    .orderBy('launch_date');
    
    return resultado
}
```

Requisição:
```
app.get("/movie/search", async(req:Request, res:Response) => {
    try {
        const movies = await returnTermo(req.query.palavra as string)
        res.status(200).send(movies)
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
})
```