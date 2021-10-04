import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  height: 380px;
  width: 280px;
  border:1px solid green;
  margin: 30px auto;
`

const CardPerson = ()=>{
    return(
        <CardContainer>
            <h1>IMAGEM</h1>
        </CardContainer>
    )
}

export default CardPerson;