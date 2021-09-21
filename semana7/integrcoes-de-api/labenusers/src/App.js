
import './App.css';
import React from 'react';
import Cadastro from './components/Cadastro'
import ListaUsuarios from './components/ListaUsuarios';


class App extends React.Component {

  state ={
    paginaCadastro: false
  }

  listaDeNomes = ()=>{
    this.setState({paginaCadastro: true})
  }

  cadastrandoUsuarios = ()=>{
    this.setState({paginaCadastro: false})
  }

  renderizaPagina = ()=>{
    if(this.state.paginaCadastro){
      return <ListaUsuarios cadastrandoUsuarios={this.cadastrandoUsuarios}/>
    }else{
      return <Cadastro listaDeNomes={this.listaDeNomes}/>;
    }
  }


 

  render(){
    
    return (
      <div>
        {this.renderizaPagina()}
      </div>
    );
  }
  
}

export default App;
