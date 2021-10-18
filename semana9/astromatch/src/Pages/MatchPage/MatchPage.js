import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MatchPageContainer, MatchPeopleContainer, HeaderMatches } from './styled'
import CardMatches from '../../components/CardMatches/CardMatches'

const MatchPage = (props) => {
  const [matchesList, setMatchesList] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    const url4 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/matches"

    axios.get(url4)
      .then((res) => {
        console.log(res.data)
        setMatchesList(res.data.matches)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const match = matchesList.map(eachMatch => {
    return <CardMatches 
    key={eachMatch.id}
    name={eachMatch.name}
    image={eachMatch.photo}
    />
  })

  return (
    <MatchPageContainer>
      <MatchPeopleContainer>
        <HeaderMatches>
          <p onClick={() => props.choosePage("home")}>&#8644;Profiles</p>
          <h3>AstroMatches</h3>
        </HeaderMatches>
        {match}
      </MatchPeopleContainer>
    </MatchPageContainer>
  )
}

export default MatchPage;