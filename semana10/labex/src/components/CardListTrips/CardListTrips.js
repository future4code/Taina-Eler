import React from 'react'
import {CardListTripsContainer} from "./styled"

export const CardListTrips = (props) =>{
    return(
        <CardListTripsContainer>
            <h2>{props.name}</h2>
            <p>{props.date}</p>
        </CardListTripsContainer>
    )
}