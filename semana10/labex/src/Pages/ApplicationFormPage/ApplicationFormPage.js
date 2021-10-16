import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import { goBack, goToPage } from '../../components/Functions/Functions'
import {ApplicationFormHeader, Form} from "./styled"
import axios from 'axios'

const ApplicationFormPage = () => {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [tripId, setTripId]= useState("")

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")
    // const [viagem, setViagem] = useState([])

    const onChangeNome = (event)=>{
        setNome(event.target.value)
    }
    const onChangeIdade = (event)=>{
        setIdade(event.target.value)
    }
    const onChangeTexto = (event)=>{
        setTexto(event.target.value)
    }
    const onChangeProfissao = (event)=>{
        setProfissao(event.target.value)
    }
    const onChangePais = (event)=>{
        setPais(event.target.value)
    }
    // const onChangeViagem = (event)=>{
    //     setViagem(event.target.value)
    // }

    const onChangeTrip = (event)=>{
        setTripId(event.target.value)
    }

    useEffect(()=>{
        const urlTrips = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips"

        axios.get(urlTrips)
            .then((res) => {
                setTrips(res.data.trips)
            })
    },[])

    const onSubmitApplication = (event) =>{
        event.preventDefault()
        const urlApply = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips/${tripId}/apply`
        const bodyApply = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais
        }

        axios.post(urlApply, bodyApply)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    return (
        <div>
            <ApplicationFormHeader>
                <button onClick={() => { goBack(history, "/trips/application") }}>Voltar</button>
                <button onClick={() => { goToPage(history, "/") }}>Home</button>
            </ApplicationFormHeader>
            <h3>ApplicationFormPage</h3>
            <Form onSubmit={onSubmitApplication}>
                <label><strong>Nome: </strong></label>
                <input
                 placeholder="Nome"
                 type="name"
                 value={nome}
                 onChange={onChangeNome}
                />

                <label><strong>Idade: </strong></label>
                <input
                 type="number"
                 value={idade}
                 onChange={onChangeIdade}
                />

                <label><strong>Texto de Inscrição: </strong></label>
                <input
                 placeholder="Explique porque você seria um bom(boa) candidato(a)"
                 type="text"
                 value={texto}
                 onChange={onChangeTexto}
                />

                <label><strong>Profissão: </strong></label>
                <input
                 placeholder="Profissão"
                 type="text"
                 value={profissao}
                 onChange={onChangeProfissao}
                />

                <label><strong>País: </strong></label>
                <select value={pais} onChange={onChangePais}>
                    <option value={"brasil"}>Brazil</option>
                    <option value={"usa"}>USA</option>
                    <option value={"england"}>England</option>
                    <option value={"canada"}>Canada</option>
                </select>

                <label><strong>Viagem: </strong></label>
                <select defaultValue=""  onChange={onChangeTrip}>
                   {trips.map((trip)=>{
                       return <option value={trip.id}>{trip.name}</option>
                   })}
                </select>
                
                <button  type={"submit"}>Enviar</button>
            </Form>
            
        </div>
    )
}

export default ApplicationFormPage