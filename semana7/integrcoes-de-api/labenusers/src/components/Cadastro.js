import React from 'react'
import axios from 'axios';
import styled from 'styled-components';


const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Header = styled.header`
  height: 60px;
  background: rgb(9,97,121);
  background: linear-gradient(166deg, rgba(9,97,121,0.7278207500329179) 11%, rgba(19,69,115,1) 52%, rgba(24,54,111,0.4384949073362886) 76%, rgba(34,36,150,1) 100%);
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-bottom: 35px;
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
          <div>
            <Header>
              <button onClick={this.props.irParaListaUsuarios}>Página de Usuários</button>
            </Header>

            <ContainerConteudo>
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
            </ContainerConteudo>
          </div>
            
        )
    }
}

export default Cadastro;