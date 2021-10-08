import React from 'react'
import { CardPersonContainer, PersonImage, InformationContainer, PersonImageFundo } from "./styled"

const CardPerson = (props) => {
    return (
        <CardPersonContainer>
            <PersonImageFundo src={props.image} alt="Perfil" />
            <PersonImage src={props.image} alt="Perfil" />
            <InformationContainer>
                <h2>{props.name}, {props.age} anos</h2>
                <p>{props.bio}</p>
            </InformationContainer>
        </CardPersonContainer>
    )
}
export default CardPerson