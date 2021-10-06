import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const HomePageContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
const ProfileImage = styled.img`
  width: 300px;
  
`
const MainContainer = styled.div`
  width: 400px;
  border:1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding: 12px;
`
const MatchButton = styled.div`
  display: flex;
  border: 1px solid blue;
  width: 400px;
  justify-content: space-around;
  p{
      cursor: pointer;
  }
`

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
   

    const chooseProfiles = (profileId, sn)=>{
        const url2 = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/taina-soares-maryam/choose-person"
        const headers = "Content-Type: application/json"
        const body = {
            id: profileId,
            choice: sn
        }
        axios.post(url2,body, headers)
        .then((res)=>{
            console.log(res.data)
            getProfiles()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return (
        <HomePageContainer>
            {!profiles? <div>Aperte em clear</div>:
            <MainContainer>
                
                <div>
                    <button onClick={() => props.choosePage("match")}>Lista de Matches</button>
                </div>
                <ProfileImage src={profiles.photo} alt="Perfil" />
                <h4>{profiles.name}, {profiles.age}</h4>
                <p>{profiles.bio}</p>
                <MatchButton>
                    <p onClick={()=>chooseProfiles(profiles.id, false)}>&#10006;</p>
                    <p onClick={()=>chooseProfiles(profiles.id , true)}>&#10084;</p>
                </MatchButton>
            </MainContainer>
                }
        </HomePageContainer>
    )
}

export default HomePage;