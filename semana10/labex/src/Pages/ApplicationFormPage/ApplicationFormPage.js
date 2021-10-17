import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { goBack, goToPage } from '../../components/Functions/Functions'
import { ApplicationFormHeader, Form, ContainerApplication, PageContainer } from "./styled"
import axios from 'axios'

const ApplicationFormPage = () => {

    const history = useHistory()
    const { id } = useParams()

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }
    const onChangeIdade = (event) => {
        setIdade(event.target.value)
    }
    const onChangeTexto = (event) => {
        setTexto(event.target.value)
    }
    const onChangeProfissao = (event) => {
        setProfissao(event.target.value)
    }
    const onChangePais = (event) => {
        setPais(event.target.value)
    }



    const onSubmitApplication = (id) => {
        const urlApply = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/trips/${id}/apply`
        const bodyApply = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais
        }

        axios.post(urlApply, bodyApply)
            .then((response) => {
                alert(response.data.message)
                setNome("")
                setIdade(0)
                setTexto("")
                setProfissao("")
                setPais("")
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    useEffect(() => {
        onSubmitApplication(id)
    }, [])

    return (
        <PageContainer>
            <ApplicationFormHeader>
                <button onClick={() => { goBack(history, "/trips/application") }}>Voltar</button>
                <button onClick={() => { goToPage(history, "/") }}>Home</button>
            </ApplicationFormHeader>
            <ContainerApplication>
                <h1>Increva-se para uma de nossas Viagens</h1>
                <Form>
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
                        <option value={"Switzerland"}>Switzerland</option>
                        <option value={"Brazil"}>Brazil</option>
                        <option value={"USA"}>USA</option>
                        <option value={"England"}>England</option>
                        <option value={"Canada"}>Canada</option>
                    </select>
                </Form>
                <button onClick={() => onSubmitApplication(id)}>Enviar</button>
            </ContainerApplication>
        </PageContainer>
    )
}

export default ApplicationFormPage