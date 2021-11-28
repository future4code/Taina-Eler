import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import axios from 'axios'
import {CreateForm, CreateTripHeader, PageCreateContainer} from "./styled"

const CreateTripPage = () =>{
    const history = useHistory()
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState(0)

    const onChangeName = (event) =>{
        setName(event.target.value)
    }

    const onChangePlanet = (event) =>{
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) =>{
        setDate(event.target.value)
    }

    const onChangeDescription = (event) =>{
        setDescription(event.target.value)
    }

    const onChangeDuration = (event) =>{
        setDuration(event.target.value)
    }
    
    
    const onSubmitTrips = () =>{
        const urlCreateTrips = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips"
        const token = localStorage.getItem("token")
        const bodyCreate = {
            name:name,
            planet:planet,
            date:date,
            description:description,
            durationInDays:duration
        }
        axios.post(urlCreateTrips,bodyCreate, {
            headers:{
                auth: token
            }
        })
        .then((response)=>{
            alert("Viagem criada com Sucesso", response.status)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    useEffect(()=>{
        onSubmitTrips()
    },[])


    return(
        <PageCreateContainer>
            <CreateTripHeader>
                <button onClick={()=>goBack(history, "/admin/trips/list")}>Voltar</button>
            </CreateTripHeader>
            <CreateForm>
                <h1>Criar Viagens</h1>
                <label><strong>Nome: </strong></label>
                <input
                 placeholder="Name"
                 type="name"
                 value={name}
                 onChange={onChangeName}
                />
                <label><strong>Planeta: </strong></label>
                <input
                 placeholder="Planet"
                 type="planet"
                 value={planet}
                 onChange={onChangePlanet}
                />
                <label><strong>Data: </strong></label>
                <input
                 id="date"
                 type="date"
                 value={date}
                 onChange={onChangeDate}
                />
                <label><strong>Descrição: </strong></label>
                <input
                 placeholder="Description"
                 type="description"
                 value={description}
                 onChange={onChangeDescription}
                />
                <label><strong>Duração em dias: </strong></label>
                <input
                 placeholder="Duration in Days"
                 type="number"
                 value={duration}
                 onChange={onChangeDuration}
                />
                <button onClick={onSubmitTrips}>Criar</button>
            </CreateForm>
        </PageCreateContainer>
    )
}

export default CreateTripPage