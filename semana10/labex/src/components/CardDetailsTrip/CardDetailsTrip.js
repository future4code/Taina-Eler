import React from "react";
import {CardDetailsTripContainer} from "./styled"

export const CardDetailsTrip = (props) =>{
    return(
        <CardDetailsTripContainer>
            <p><strong>Nome:</strong>{props.info.name}</p>
            <p><strong>Planeta:</strong>{props.info.planet}</p>
            <p><strong>Data:</strong>{props.info.date}</p>
            <p><strong>Descrição:</strong>{props.info.description}</p>
            <p><strong>Duração em dias:</strong>{props.info.durationInDays} anos</p>
        </CardDetailsTripContainer>
    )
}