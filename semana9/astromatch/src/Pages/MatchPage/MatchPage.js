import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const[matchesList, setMatchesList] = useState([])

  useEffect(()=>{
    getMatches()
  },[])

  const getMatches = ()=>{
    const url4 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/matches"

    axios.get(url4)
    .then((res)=>{
      console.log(res.data)
      setMatchesList(res.data.matches)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }

  const match = matchesList.map(eachMatch=>{
    return <div>{eachMatch.name}</div>
  })
    return (
        <MatchContainer>
            <button onClick={() => props.choosePage("home")}>Home</button>
            <p>MatchPage</p>
            <MatchPeople>
               {match}
            </MatchPeople>
        </MatchContainer>
    )
}

export default MatchPage;