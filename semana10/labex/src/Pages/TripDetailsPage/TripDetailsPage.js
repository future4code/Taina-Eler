import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import { CardDetailsTrip } from '../../components/CardDetailsTrip/CardDetailsTrip'
import { CardCandidates } from '../../components/CardCandidates/CardCandidates'
import {TripDetailHeader} from "./styled"


 const TripDetailsPage = () =>{
     const history = useHistory()
     const [tripsDetails, setTripsDetails] = useState({})
     const token = localStorage.getItem("token")
     const{id} = useParams()
     console.log(id)

     const getTripsDetails = (id) =>{
         const urlDetail = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trip/${id}`

         axios.get(urlDetail, {
             headers:{
                 auth: token
             }
         })
         .then((response)=>{
             setTripsDetails(response.data.trip)
         })
         .catch((error)=>{
             console.log(error.response)
         })
     }

     useEffect(()=>{
         getTripsDetails(id)
     },[])



     return (
         <div>
             <TripDetailHeader>
                 <button onClick={()=>goBack(history, "/admin/trips/list")}>Voltar</button>
             </TripDetailHeader>
             <h1>{tripsDetails.name}</h1>
             <CardDetailsTrip name={tripsDetails.name}/>
             <h2>Candidatos</h2>
             <CardCandidates/>
         </div>
     )

}

export default TripDetailsPage