import React from 'react'
import axios from 'axios';
import styled from 'styled-components';


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

class Cadastro extends React.Component{

  state ={
    userName: "",
    userEmail: ""
  }

  

//Criando Usuários
  createUser = ()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    };

    axios.post(url, body, headers)
    .then((resposta) =>{
        console.log(resposta)
      alert("Usuário cadastrado com sucesso!")
      this.setState({userName: "", userEmail: ""})
    })
    .catch((error) =>{
      alert(error.response.data.message)
    })
  }

  

  onChangeName = (event)=>{
    this.setState({userName: event.target.value})
  }

  onChangeEmail = (event)=>{
    this.setState({userEmail: event.target.value})
  }
 
    render(){
        return(
            <ContainerPagina>
              <button onClick={this.props.irParaListaUsuarios}>Página de Usuários</button>
                <h1>Cadastro de Usuário</h1>
                <input 
                placeholder="Insira seu nome"
                value={this.state.userName}
                onChange={this.onChangeName}
                />

               <input
               placeholder="Insira seu email"
               value={this.state.userEmail}
               onChange={this.onChangeEmail}
               />

               <button onClick={this.createUser}>Enviar</button>
            </ContainerPagina>
        )
    }
}

export default Cadastro;