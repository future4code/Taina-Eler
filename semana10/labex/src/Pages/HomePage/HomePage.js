import React from 'react'
import { useHistory } from 'react-router'
import { goToPage } from '../../components/Functions/Functions'
import { BackgroungImage, HomeInformation, Buttons } from './styled'




const HomePage = () => {
    const history = useHistory()

    return (
        <BackgroungImage>
            <HomeInformation>
                <h3>LabeX</h3>
                <Buttons>
                    <button onClick={()=>{goToPage(history, "/trips/list")}}>viagens</button>
                    <button onClick={()=>{goToPage(history, "/login")}}>login</button>
                </Buttons>
            </HomeInformation>
        </BackgroungImage>
    )
}

export default HomePage