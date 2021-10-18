import React from "react"
import {CardMatchesConteiner} from "./styled"

 const CardMatches= (props)=>{
    return(
        <CardMatchesConteiner>
            <img src={props.image} alt="Perfil" />
            <strong>{props.name}</strong>
        </CardMatchesConteiner>
    )
}

export default CardMatches