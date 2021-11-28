import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import { CardDetailsTrip } from '../../components/CardDetailsTrip/CardDetailsTrip'
import { CardCandidates } from '../../components/CardCandidates/CardCandidates'
import { TripDetailHeader, PageDetailsContainer, TripDetailPageContainer } from "./styled"


const TripDetailsPage = () => {
    const history = useHistory()
    const [tripsDetails, setTripsDetails] = useState()
    const token = localStorage.getItem("token")
    const { id } = useParams()

    const getTripsDetails = () => {
        const urlDetail = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trip/${id}`

        axios.get(urlDetail, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setTripsDetails(response.data.trip)
            })
    }

    useEffect(() => {
        getTripsDetails()
    }, [])

    const chooseCandidate = (option,candidateId) =>{
        const urlChoose = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips/${id}/candidates/${candidateId}/decide`
        const bodyChoose={
            approve: option
        }

        axios.put(urlChoose,bodyChoose, {
            headers:{
                auth: token
            }
        })
        .then(()=>{
            getTripsDetails()
        })
    }



    return (
        <PageDetailsContainer>
            <TripDetailHeader>
                <button onClick={() => goBack(history, "/admin/trips/list")}>Voltar</button>
            </TripDetailHeader>
            {tripsDetails ?
            <TripDetailPageContainer>
                <h1>{tripsDetails.name}</h1>
                <CardDetailsTrip info={tripsDetails} />
                <h2>Candidatos</h2>
                {tripsDetails.candidates.map((eachcandidate) => {
                    return <CardCandidates candidate={eachcandidate} chooseCandidate={chooseCandidate} />
                })}
            </TripDetailPageContainer> 
            : <div><h3>Carregando...</h3></div>}
        </PageDetailsContainer>
    )

}

export default TripDetailsPage