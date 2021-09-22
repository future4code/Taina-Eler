
import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';



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
        {this.escolheTela()}
      </div>
    );
  }
  
}

export default App;
