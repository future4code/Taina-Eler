import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Infos from './Infos'

const CadaEstilo = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightgray;
  margin: 5px;
  text-align: center;
  width: 200px;
  height: 20px;
  display: flex;
  justify-content: space-around;

  /* button {
      background-color: transparent;
      border:none;
  } */
`

class VisualizarPlaylist extends React.Component{

    state = {
        playlists:[],
        openInfo: false
    }

    componentDidMount = ()=>{
        this.getAllPlaylists()
    }
//-----------------------------------------------------------------------------------------------------
    getAllPlaylists= ()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers:{
                Authorization: "taina-soares-maryam"
            }
        })
        .then((res)=>{
            console.log(res)
            this.setState({playlists: res.data.result.list})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    deletePlaylist = (id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "taina-soares-maryam"
            }
        })
        .then((res)=>{
            console.log(res)
            this.getAllPlaylists()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    getPlaylistTracks = (playlistId)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        
        axios.get(url, {
            headers:{
                Authorization: "taina-soares-maryam"
            }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
//-----------------------------------------------------------------------------------------------------------------------------------
    openInfo = ()=>{
        this.setState({openInfo: true})
    }
    closeInfo = ()=>{
        this.setState({openInfo: false})
    }
    render(){
        console.log(this.state.playlists)
        const playlist = this.state.playlists.map((eachPlaylist) =>{
            return(
                <CadaEstilo key={eachPlaylist.id}>
                    {eachPlaylist.name}
                    <button onClick={this.openInfo}>Infos {eachPlaylist.name}</button>
                    <button onClick={()=>this.deletePlaylist(eachPlaylist.id)}>X</button>
                </CadaEstilo>
            )
        })
        return(
            <div>
                {this.state.openInfo && <Infos closeInfo = {this.closeInfo}/>}
                <p>Listas</p>
                <button onClick={this.props.irParaHome}>Voltar</button>
                {playlist}
                
            </div>
        )
    }
}

export default VisualizarPlaylist;