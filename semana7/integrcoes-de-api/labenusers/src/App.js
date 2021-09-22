
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
` 


class App extends React.Component {

  state ={
    telaAtual: "cadastro"
  }
  //Renderizando telas
  escolheTela = ()=>{
    switch(this.state.telaAtual){
      case "cadastro":
        return <Cadastro irParaListaUsuarios={this.irParaListaUsuarios}/>
      case "listaUsuarios":
        return <ListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return "Página não encontrada!"
    }
  }

  irParaCadastro = ()=>{
    this.setState({telaAtual: "cadastro"})
  }

  irParaListaUsuarios = ()=>{
    this.setState({telaAtual:"listaUsuarios"})
  }

  render(){
    
    return (
      <div>
        <GlobalStyle/>
        {this.escolheTela()}
      </div>
    );
  }
  
}

export default App;
