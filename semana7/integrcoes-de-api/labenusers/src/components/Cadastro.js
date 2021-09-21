import React from 'react'
import axios from 'axios'


const headers = {
      headers:{
        Authorization: "taina-soares-maryam"
      }
    } 

  

class Cadastro extends React.Component{

    state ={
        
        usuarios: [],
        userName: "",
        userEmail: ""
      }

    componentDidMount(){
        this.getAllUsers();
      };
    
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
          alert("Email cadastrado com sucesso!")
          this.setState({userName: "", userEmail: ""})
          this.getAllUsers();
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
    
      //Pegando Usuários (verificando)
      getAllUsers = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
        axios.get(url, headers)
        .then((resposta) =>{
          console.log(resposta)
        })
        .catch((error) =>{
          alert(error.response)
        })
      }
    render(){
        return(
            <div>
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

              <button onClick={this.props.createUser}>Enviar</button>
        
              <button onClick={this.props.listaDeNomes}>Página de Usuários</button>
            </div>
        )
    }
}

export default Cadastro;