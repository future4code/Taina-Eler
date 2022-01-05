#LaBook

##Estrutura de dados

Usuarios

```
    id
    nome
    email
    senha
```
    posts
   ```
        user_id(FK)
        id
        foto
        descriçao
        dataCriação
        tipo: "NORMAL" | "EVENTO"

    curtidas
    id_post(FK)
    id_user(FK)


    comentarios
    id
    id_post(FK)
    id_user(FK)
    texto
   ```

##Funcionalidades ENDPOINTS

    Cadastro: dados principais do usuário => token

    Login: email e senha => token

    Criar  Post: dados do post => mensage(string)

    Buscar post por ID: id => post