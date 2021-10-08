import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HomePageContainer, MainContainer, ChooseButton, MatchButton, Refresh } from "./styled"
import CardPerson from '../../components/CardPerson/CardPerson'

const HomePage = (props) => {

    const [profiles, setProfiles] = useState({})

    useEffect(() => {
        getProfiles()

    }, [])


    const getProfiles = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/person"
        axios.get(url)
            .then((res) => {
                setProfiles(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const chooseProfiles = (profileId, choose) => {
        const url2 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/choose-person"
        const headers = "Content-Type: application/json"
        const body = {
            id: profileId,
            choice: choose
        }
        axios.post(url2, body, headers)
            .then((res) => {
                console.log(res.data)
                getProfiles()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const clearProfiles = () => {
        const url3 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/clear"
        const headers = "Content-Type: application/json"
        axios.put(url3, headers)
            .then((res) => {
                console.log(res.data)
                getProfiles()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <HomePageContainer>
            {!profiles ? <Refresh><div><strong>A página precisa ser restaurada :)</strong><h5>Aperte aqui!&darr;</h5><p onClick={clearProfiles}>&#8635;</p></div></Refresh> :
                <MainContainer>
                    <MatchButton>
                        <div>
                            <p onClick={() => props.choosePage("match")}>&#8644;Matches</p>
                            <h3>AstroMatch</h3>
                        </div>
                    </MatchButton>
                    <CardPerson
                        image={profiles.photo}
                        name={profiles.name}
                        age={profiles.age}
                        bio={profiles.bio}
                    />
                    <ChooseButton>
                        <p onClick={() => chooseProfiles(profiles.id, false)}>&#10006;</p>
                        <p onClick={() => chooseProfiles(profiles.id, true)}>&#10084;</p>
                    </ChooseButton>
                </MainContainer>
            }
        </HomePageContainer>
    )
}

export default HomePage;