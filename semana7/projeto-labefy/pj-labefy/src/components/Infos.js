import React from 'react'
import styled from 'styled-components';

const Fundo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerInfo = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  button{
      display: flex;
      justify-content: flex-end;
  }
`
const AdicionarMusicas = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
const Titulo = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`

class Infos extends React.Component{
    render(){
        return(
            <Fundo>
                <ContainerInfo>
                   <button onClick={this.props.closeInfo}>X</button>
                   <AdicionarMusicas>
                       <input 
                       placeholder={"Música"}
                       />
                       <input 
                       placeholder={"Artista"}
                       />
                       <input 
                       placeholder={"Url"}
                       />
                   </AdicionarMusicas>
                   <button>Adicionar</button>
                   <Titulo>
                      <h2>Estilo Musical</h2>
                   </Titulo>
                   <div>
                      <h4>Músicas</h4>
                   </div>
                </ContainerInfo>
            </Fundo>
        )
    }
}

export default Infos;