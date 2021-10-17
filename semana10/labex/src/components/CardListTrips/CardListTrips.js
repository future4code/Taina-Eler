import React from 'react'
import { useHistory } from 'react-router'
import { goToPage } from '../Functions/Functions'
import { CardListTripsContainer } from "./styled"

export const CardListTrips = (props) => {
    const history = useHistory()
    return (
        <CardListTripsContainer>
            <h2>{props.name}</h2>
            <div>
                <p><strong>Planeta:</strong>{props.planet}</p>
                <p><strong>Data:</strong>{props.date}</p>
                <p><strong>Descrição:</strong>{props.description}</p>
                <p><strong>Duração em dias:</strong>{props.durationInDays} anos</p>
            </div>
            <button onClick={() => goToPage(history, `/trips/${props.tripId}/application`)}>Inscreva-se</button>
        </CardListTripsContainer>
    )
}