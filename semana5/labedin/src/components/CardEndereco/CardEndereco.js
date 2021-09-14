import React from 'react';

import styled from "styled-components";

const CardEnderecoDiv = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    margin-bottom: 10px;
`
const CardEnderecoImg = styled.img `
    width: 50px;
`

function CardEndereco(props){
    return (
        <CardEnderecoDiv>
            <CardEnderecoImg src={props.imagem} />
            <h3>{props.nome}</h3>
            <p>{props.endereco}</p>
        </CardEnderecoDiv>
    )
}

export default CardEndereco;