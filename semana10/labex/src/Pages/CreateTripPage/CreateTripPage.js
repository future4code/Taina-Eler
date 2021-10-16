import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import axios from 'axios'
import {CreateForm, CreateTripHeader} from "./styled"

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
        <div>
            <CreateTripHeader>
                <button onClick={()=>goBack(history, "/admin/trips/list")}>Voltar</button>
            </CreateTripHeader>
            <CreateForm>
                <input
                 placeholder="Name"
                 type="name"
                 value={name}
                 onChange={onChangeName}
                />
                <input
                 placeholder="Planet"
                 type="planet"
                 value={planet}
                 onChange={onChangePlanet}
                />
                <input
                 id="date"
                 type="date"
                 value={date}
                 onChange={onChangeDate}
                />
                <input
                 placeholder="Description"
                 type="description"
                 value={description}
                 onChange={onChangeDescription}
                />
                <input
                 placeholder="Duration in Days"
                 type="number"
                 value={duration}
                 onChange={onChangeDuration}
                />
                <button onClick={onSubmitTrips}>Submit</button>
            </CreateForm>
            
        </div>
    )
}

export default CreateTripPage