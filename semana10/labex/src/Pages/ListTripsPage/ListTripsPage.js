import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goBack, goToPage } from '../../components/Functions/Functions'
import { CardListTrips } from '../../components/CardListTrips/CardListTrips'

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
        date={eachTrip.date}/>
    })

    return (
        <div>
            <div>
                <button onClick={() => { goBack(history, "/") }}>Voltar</button>
                <button onClick={() => { goToPage(history, "/trips/application") }}>Inscreva-se</button>
            </div>
            {trips}
        </div>
    )
}

export default ListTripsPage