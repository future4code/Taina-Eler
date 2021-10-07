import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MatchPageContainer, MatchPeopleContainer, MatchPeople } from './styled'
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
    name={eachMatch.name}
    image={eachMatch.photo}
    />
  })

  return (
    <MatchPageContainer>
      <MatchPeopleContainer>
        <div>
          <button onClick={() => props.choosePage("home")}>Home</button>
        </div>
        {match}
      </MatchPeopleContainer>
    </MatchPageContainer>
  )
}

export default MatchPage;