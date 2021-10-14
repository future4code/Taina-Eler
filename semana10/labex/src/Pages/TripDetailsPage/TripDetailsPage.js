import React, { useEffect, useState } from 'react'
import axios from "axios"


 const TripDetailsPage = (props) =>{
     const [tripsDetails, setTripsDetails] = useState({})
     const token = localStorage.getItem("token")

     const getTripsDetails = (id) =>{
         const urlDetail = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trip/${id}`

         axios.get(urlDetail, {
             headers:{
                 auth: token
             }
         })
         .then((response)=>{
             console.log(response.data.trip)
         })
         .catch((error)=>{
             console.log(error.response)
         })
     }

     useEffect(()=>{
         getTripsDetails(props.tripId)
     },[])



     return (
         <div>
             <h3>TripDetailsPage</h3>
             <h1>{tripsDetails.name}</h1>
         </div>
     )

}

export default TripDetailsPage