
import React, { useState } from "react"
import { useHistory } from "react-router"
import { goToPage } from "../Functions/Functions"
import Trash from "../imgs/trash.png"
import {CardListTripsAdminContainer} from "./styled"


export const CardListTripsAdmin = (props) =>{
    const history = useHistory()
    // const token = localStorage.getItem("token")

    // const deleteTrip = (id) =>{
    //     const urlDelete=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips/${id}`

    //     axios.delete(urlDelete, {
    //         headers:{
    //             auth: token
    //         }
    //     })
    //     .then((response)=>{
    //         console.log(response)

    //     })
    //     .catch((error)=>{
    //         console.log(error.response)
    //     })

    // }


    return(
        <CardListTripsAdminContainer>
            <h2 onClick={()=>goToPage(history,`/admin/trips/${props.tripId}`)}>{props.name}</h2>
            <img src={Trash} alt="Trash" onClick={props.delete}/>
        </CardListTripsAdminContainer>
    )
}