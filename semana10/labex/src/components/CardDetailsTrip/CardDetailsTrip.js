import React from "react";
import {CardDetailsTripContainer} from "./styled"

export const CardDetailsTrip = (props) =>{
    return(
        <CardDetailsTripContainer>
            <h2>{props.name}</h2>
        </CardDetailsTripContainer>
    )
}