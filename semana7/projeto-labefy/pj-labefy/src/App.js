import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CriarPlaylist from './components/CriarPlaylist';
import VisualizarPlaylist from './components/VisualizarPlaylist'

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

class App extends React.Component{

  state = {
    telaAtual: "home"
  }

  mudarDeTela = ()=>{
    switch(this.state.telaAtual){
      case "home":
        return <CriarPlaylist irParaList={this.irParaList}/>
      case "list":
        return <VisualizarPlaylist irParaHome={this.irParaHome}/>
        default:
          return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaHome = ()=>{
    this.setState({telaAtual: "home"})
  }

  irParaList = ()=>{
    this.setState({telaAtual: "list"})
  }
  render(){
    return (
      <div>
        < GlobalStyled/>
        {this.mudarDeTela()}
      </div>
    );
  }
 
}

export default App;
