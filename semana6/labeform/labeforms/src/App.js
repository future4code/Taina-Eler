import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizandoEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Etapa4/>;
    }
  }

  onClickProximaEtapa = () =>{
    const etapaAtual = this.state.etapa;
    const proximaEtapa = etapaAtual + 1;

    this.setState({etapa: proximaEtapa})
  }
  render(){
    return (
      <div className="App">
        {this.renderizandoEtapa()}
        <button onClick={this.onClickProximaEtapa}>Próximo</button>
      </div>
    );
  }

 
}

export default App;
