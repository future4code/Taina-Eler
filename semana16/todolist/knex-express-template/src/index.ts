import connection from "./connection";

//tabela User criada no workbench


// Endpoint 1 - Criar usuário
const createUser = async (
    id: string,
    name:string
    nickname: string,
    email: string,
    
  ) => {
    await connection
      .insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
      })
      .into("User");
  };