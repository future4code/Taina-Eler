import React from "react"
import {CardCandidatesContainer} from "./styled"


export const CardCandidates = (props) =>{


    const approve = ()=>{
        props.chooseCandidate(true, props.candidate.id)
    }
    const deny = ()=>{
        props.chooseCandidate(false, props.candidate.id)
    }


    return(
        <CardCandidatesContainer>
            <p><strong>Nome: </strong>{props.candidate.name}</p>
            <p><strong>Idade: </strong>{props.candidate.age}</p>
            <p><strong>Profissão: </strong>{props.candidate.profession}</p>
            <p><strong>Motivação: </strong>{props.candidate.applicationText}</p>
            <p><strong>País: </strong>{props.candidate.country}</p>
            <div>
                <button onClick={approve}>Approve</button>
                <button onClick={deny}>Deny</button>
            </div>
        </CardCandidatesContainer>
    )
}