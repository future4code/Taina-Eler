import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  //Criando estado

  state = {
    //lista de usuários
    usuarios: [
      //o objeto representa os usuários e 
      //3 propriedades
      {
        nome: "paulinha",
        foto: "https://picsum.photos/50/50?a=1",
        post: "https://picsum.photos/200/150?a=1"
      },
      {
        nome: "Nadya",
        foto: "https://picsum.photos/50/50?a=1",
        post: "https://picsum.photos/200/150?a=2"
      },
      {
        nome: "Joey",
        foto: "https://picsum.photos/50/50?a=2",
        post: "https://picsum.photos/200/150?a=3"
      }
    ]
  };
  render() {
    const listaUsuarios = this.state.usuarios.map((cadaUsuario) =>{
      return (
        <Post
        nomeUsuario={cadaUsuario.nome}
        fotoUsuario={cadaUsuario.foto}
        fotoPost={cadaUsuario.post}
      />
      )
    });
   

    return (
      <MainContainer>
        {listaUsuarios}
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />

        <Post
          nomeUsuario={'Nadya'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'Joey'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
