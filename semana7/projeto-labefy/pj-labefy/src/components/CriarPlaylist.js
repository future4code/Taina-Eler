import React from 'react';
import axios from 'axios';

class CriarPlaylist extends React.Component{
    state = {
        nome: ""
    }

    handleNome = (event)=>{
        this.setState({nome: event.target.value})
    }

    createPlaylist = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "taina-soares-maryam"
            }
        })
        .then((res)=>{
            alert("Playlist criada!")
            this.setState({nome: ""})
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })

    }
    render(){
        return(
            <div>
                <button onClick={this.props.irParaList}>Lista</button>
              <input 
              placeholder={"Nome da Playlist"}
              value={this.state.nome}
              onChange={this.handleNome}
              />
              <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}

export default CriarPlaylist;