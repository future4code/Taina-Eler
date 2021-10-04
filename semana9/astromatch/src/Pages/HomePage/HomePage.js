import React,{useState} from 'react'
import styled from "styled-components"
import CardPerson from '../../CardPerson'

const MainContainer = styled.div`
  height:500px;
  width: 400px;
  border:1px solid black;
  margin: 75px auto;
  
`
const MatchButton = styled.div`
  display: flex;
  border: 1px solid blue;
  justify-content: space-evenly;
  p{
      cursor: pointer;
  }
`

const HomePage = (props) => {

    const[profiles, setProfiles] = useState({
        profile: {
            id: "OS2w9vU9AUkmXhp4sZ7M",
            name: "Leia Organa",
            bio: "Interessada em construir uma família e proteger os desamparados",
            photo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg",
            age: 23
        }
    })
    return (
        <div>
            <MainContainer>
                <button onClick={() => props.choosePage("match")}>Lista de Matches</button>
                <CardPerson/>
                <MatchButton>
                    <p>&#10006;</p>
                    <p>&#10084;</p>
                </MatchButton>
            </MainContainer>

        </div>
    )
}

export default HomePage;