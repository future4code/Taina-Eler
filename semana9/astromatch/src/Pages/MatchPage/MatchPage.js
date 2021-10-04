import React from 'react'
import styled from "styled-components"

const MatchContainer = styled.div`
  height:500px;
  width: 400px;
  border:1px solid black;
  margin: 75px auto;
`
const MatchPeople =styled.div`
  border: 1px solid green;
`

const MatchPage = (props) => {
    return (
        <MatchContainer>
            <button onClick={() => props.choosePage("home")}>Home</button>
            <p>MatchPage</p>
            <MatchPeople>
                <div>Match1</div>
                <div>Match2</div>
                <div>Match3</div>
                <div>Match4</div>
            </MatchPeople>
        </MatchContainer>
    )
}

export default MatchPage;