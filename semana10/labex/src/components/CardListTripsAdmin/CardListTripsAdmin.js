
import React from "react"
import { useHistory } from "react-router"
// import TripDetailsPage from "../../Pages/TripDetailsPage/TripDetailsPage"
import { goToPage } from "../Functions/Functions"
import Trash from "../imgs/trash.png"
import {CardListTripsAdminContainer} from "./styled"


export const CardListTripsAdmin = (props) =>{
     const history = useHistory()
    console.log(props.tripId)
    return(
        <CardListTripsAdminContainer>
            <h2 onClick={()=>goToPage(history,`/admin/trips/${props.tripId}`)}>{props.name}</h2>
            <img src={Trash} alt="Trash" onClick={props.delete}/>
        </CardListTripsAdminContainer>
    )
}