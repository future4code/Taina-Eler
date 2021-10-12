import React from 'react'
import styled from "styled-components"
import BackImage from "../../components/imgs/1.jpg"

const BackgroungImage = styled.div`
  background-image: url('${BackImage}');
  min-height: 100vh;
  background-size: 100% 100%;
`
const HomeInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3{
      color:white;
      text-align: center;
      padding-top: 10%;
      font-size: 12vh;
  }
`
const Buttons = styled.div`
   display: flex;
   justify-content: space-around;
   width: 20vw;
   margin-top: 5vh;

`
const HomePage = () => {
    return (
        <BackgroungImage>
            <HomeInformation>
                <h3>HomePage</h3>
                <Buttons>
                    <button>viagens</button>
                    <button>login</button>
                </Buttons>
            </HomeInformation>
        </BackgroungImage>
    )
}

export default HomePage