import React from 'react'
import { useHistory } from 'react-router'
import { goBack, goToPage } from '../../components/Functions/Functions'
import {ApplicationFormHeader} from "./styled"

const ApplicationFormPage = () => {
    const history = useHistory()

    // const goBackListTrips = () =>{
    //     history.goBack("/trips/application")
    // }


    // const goToHome = () =>{
    //     history.push("/")
    // }
    return (
        <div>
            <ApplicationFormHeader>
                <button onClick={() => { goBack(history, "/trips/application") }}>Voltar</button>
                <button onClick={() => { goToPage(history, "/") }}>Home</button>
            </ApplicationFormHeader>
            <h3>ApplicationFormPage</h3>
        </div>
    )
}

export default ApplicationFormPage