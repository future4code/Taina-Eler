import React from 'react'




class ListaUsuarios extends React.Component{
    render(){

        // const nomeUsuarios = this.props.state.usuarios.map((item) => {
        //     return <li key={item.id}>{item.name}</li>;
        //   }); 
        return(
            <div>
                <h1>Lista de Nome dos Usuários Cadastrados</h1>
                
                <button onClick={this.props.cadastrandoUsuarios}>Página de Cadastro</button>
                {/* {nomeUsuarios} */}
            </div>
        )
    }
}

export default ListaUsuarios;