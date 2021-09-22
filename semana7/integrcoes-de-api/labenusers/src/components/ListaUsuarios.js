import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BoxNomes = styled.div`
   border: 1px solid black;
   border-radius: 3px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 40px;
   width: 200px;
   margin-bottom: 12px;
   font-size: 20px;
   padding: 8px;
`

const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const headers = {
    headers:{
      Authorization: "taina-soares-maryam"
    }
  } 


class ListaUsuarios extends React.Component{

    state = {
        usuarios:[]
    }

    //Componente DidMount pega os usuários, passando a função getAllUsers assim que a tela abrir.
    componentDidMount(){
        this.getAllUsers();
      };

    //Pegando Usuários (verificando)
  getAllUsers = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, headers)
    .then((resposta) =>{
      this.setState({usuarios: resposta.data})
    })
    .catch((error) =>{
      alert("Tente novamente")
    })
  }

  //Deletando Usuários
    deleteUser = (id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        axios.delete(url,headers)
        .then((resposta)=>{
            alert("Usuário deletado!")
            //atualizando lista, sem precisar ficar atualizando a página manualmente
            this.getAllUsers()
        })
        .catch((error)=>{
            alert("Tente novamente!")
        })
    }

    render(){

        const listaNomesUsuarios = this.state.usuarios.map((cadaUser) =>{
            return <BoxNomes key={cadaUser.id}>
                     {cadaUser.name}
                     <button onClick={()=>this.deleteUser(cadaUser.id)}>X</button>
                   </BoxNomes>
        })
        return(
            <ContainerPagina>
                <button onClick={this.props.irParaCadastro}>Página de Cadastro</button>
                <h1>Lista de Nome dos Usuários Cadastrados</h1>
                {listaNomesUsuarios}
            </ContainerPagina>
        )
    }
}

export default ListaUsuarios;