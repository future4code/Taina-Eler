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
    deleteUser = (id,name)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        if(window.confirm(`Tem certeza de que deseja deletar, o(a) ${name}?`)){
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
        //--------utilizando: deleteUser = async()=>{} -------------------

        // if(window.confirm("Tem certeza de que deseja deletar?")){
        //   try{
        //     const res = await axios.delete(url,headers)
        //     alert("Usuário deletado!")
        //     this.getAllUsers()
  
        //   }catch (error){
        //     alert("Tente novamente!")
        //   }
        // }   
    }

    render(){

        const listaNomesUsuarios = this.state.usuarios.map((cadaUser) =>{
            return <BoxNomes key={cadaUser.id}>
                     {cadaUser.name}
                     <button onClick={()=>this.deleteUser(cadaUser.id, cadaUser.name)}>X</button>
                   </BoxNomes>
        })
        return(
          <div>
            <Header>
            <button onClick={this.props.irParaCadastro}>Página de Cadastro</button>
            </Header>
            <ContainerPagina>
                <h1>Lista de Nome dos Usuários Cadastrados</h1>
                {listaNomesUsuarios}
            </ContainerPagina>
          </div>
        )
    }
}

export default ListaUsuarios;