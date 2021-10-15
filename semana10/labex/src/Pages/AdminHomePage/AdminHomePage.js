import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from "axios"
import { CardListTripsAdmin } from "../../components/CardListTripsAdmin/CardListTripsAdmin"
import { goBack, goToPage } from '../../components/Functions/Functions'
import { AdminHomePageHeader, AdminHomeBody } from "./styled"

const AdminHomePage = () => {
    const history = useHistory()
    const [listTripsAdmin, setListTripsAdmin] = useState([])
    const token = localStorage.getItem("token")

    const getListTripsAdmin = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips"

        axios.get(url)
            .then((res) => {
                setListTripsAdmin(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getListTripsAdmin()
    }, [])

    const deleteTrip = (id) => {
        const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips/${id}`

        axios.delete(urlDelete, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                alert("Viagem excluída com sucesso!")
                getListTripsAdmin()

            })
            .catch((error) => {
                console.log(error.response)
            })

    }

    const tripsAdmin = listTripsAdmin.map((eachTrip) => {
        console.log(eachTrip)
        return <CardListTripsAdmin
            key={eachTrip.id}
            name={eachTrip.name}
            date={eachTrip.date}
            tripId={eachTrip.id}
            delete={() => deleteTrip(eachTrip.id)}
        />
    })
    return (
        <div>
            <AdminHomePageHeader>
                <button onClick={() => goToPage(history, "/admin/trips/create")}>Criar Viagens</button>
                <button onClick={() => goBack(history, "/login")}>Logout</button>
            </AdminHomePageHeader>
            <AdminHomeBody>
                <h1>Viagens</h1>
                {tripsAdmin}
            </AdminHomeBody>
        </div>
    )
}

export default AdminHomePage