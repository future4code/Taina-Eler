import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import { CardListTrips } from '../../components/CardListTrips/CardListTrips'
import {ListTripsPageHeader, Container, PageListContainer} from "./styled"

const ListTripsPage = () => {
    const history = useHistory()
    const [listTrips, setListTrips] = useState([])

    const getListTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips"

        axios.get(url)
            .then((res) => {
                setListTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getListTrips()
    }, [])

    

    const trips = listTrips.map((eachTrip) => {
        return <CardListTrips 
        key={eachTrip.name}
        name={eachTrip.name}
        date={eachTrip.date}
        tripId={eachTrip.id}
        planet={eachTrip.planet}
        description={eachTrip.description}
        durationInDays={eachTrip.durationInDays}
        />
    })

    return (
        <PageListContainer>
            <ListTripsPageHeader>
                <button onClick={() => { goBack(history, "/") }}>Home</button>
            </ListTripsPageHeader>
            <Container>
                <h1>Viagens para o Espaço</h1>
              {trips}
            </Container>
        </PageListContainer>
    )
}

export default ListTripsPage