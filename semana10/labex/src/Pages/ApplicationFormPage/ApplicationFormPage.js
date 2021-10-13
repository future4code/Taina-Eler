import React from 'react'
import { useHistory } from 'react-router'
import { goBack, goToPage } from '../../components/Functions/Functions'

const ApplicationFormPage = () =>{
    const history = useHistory()

    // const goBackListTrips = () =>{
    //     history.goBack("/trips/application")
    // }


    // const goToHome = () =>{
    //     history.push("/")
    // }
    return(
        <div>
            <h3>ApplicationFormPage</h3>
            <button onClick={()=>{goBack(history,"/trips/application")}}>Voltar</button>
            <button onClick={()=>{goToPage(history, "/")}}>Home</button>
        </div>
    )
}

export default ApplicationFormPage