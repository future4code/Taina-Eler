import React from "react"
import {CardMatchesConteiner} from "./styled"

 const CardMatches= (props)=>{
    return(
        <CardMatchesConteiner>
            <img src={props.image} alt="Perfil" />
            {props.name}
        </CardMatchesConteiner>
    )
}

export default CardMatches