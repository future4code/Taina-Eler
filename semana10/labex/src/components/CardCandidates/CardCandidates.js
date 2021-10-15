import React from "react"
import {CardCandidatesContainer} from "./styled"

export const CardCandidates = () =>{
    return(
        <CardCandidatesContainer>
            <h4>Candidatos</h4>
            <div>
                <button>Approve</button>
                <button>Deny</button>
            </div>
        </CardCandidatesContainer>
    )
}