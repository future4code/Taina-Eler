import React from "react";

class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text" />
                <p>2. Qual a sua idade?</p>
                <input type="text" />
                <p>3. Qual o seu email?</p>
                <input type="text" />
                <p>4. Qual a sua escolaridade?</p>
                <input type="text" />
            </div>
        )
    }
}

export default Etapa1;