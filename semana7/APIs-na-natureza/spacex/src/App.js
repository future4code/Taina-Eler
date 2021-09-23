import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Imagem = styled.img`
  height: 150px;
  width: 180px;
`
const CardNavio = styled.div`
  border:1px solid black;
  box-shadow: 5px 5px 8px black;
  width: 500px;
  height: 180px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 18px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    ships: []
  }

  componentDidMount = ()=>{
    this.getAllShips()
  }

  getAllShips = ()=>{
    const url = "https://api.spacexdata.com/v4/ships"

    axios.get(url)
    .then((res)=>{
      console.log(res.data)
      this.setState({ships: res.data})
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  render(){
    const shipList = this.state.ships.map((eachShip)=>{
      console.log(eachShip.active)
      return(
        <CardNavio key={eachShip.id}>
          <div>
            <h4>Nome: {eachShip.name}</h4>
            <p>Em atividade: {eachShip.active?"Ativo":"Desativado"}</p>
            <p>Porto de Origem: {eachShip.home_port}</p>
          </div>
          <Imagem src={eachShip.image} alt="Imagem do Navio"/>
        </CardNavio>
      )
    })
    return (
      <Container>
        <h1>Navios da Frota SpaceX</h1>
        {shipList}
      </Container>
    );
  }
}

export default App;
