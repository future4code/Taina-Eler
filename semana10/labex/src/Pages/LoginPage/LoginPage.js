import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { goBack } from '../../components/Functions/Functions'
import { LoginPageContainer, HeaderLogin, Meio, ImageLogin, InputLogin } from "./styled"
import LoginImage from "../../components/imgs/login4.jpg"



const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitVerifyLogin = () => {
        const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/taina-soares-maryam/login"
        const bodyLogin = {
            email: email,
            password: password
        }

        axios.post(urlLogin, bodyLogin)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                history.push("/admin/trips/list")
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }



    return (
        <LoginPageContainer>
            <HeaderLogin>
                <button onClick={() => { goBack(history, "/") }}>Home</button>
            </HeaderLogin>
            <Meio>
                <ImageLogin>
                    <img src={LoginImage} alt="LoginImagem" />
                </ImageLogin>
                <InputLogin>
                    <h1>Bem Vindo</h1>
                    <input
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={onChangeEmail}
                    />

                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <button onClick={onSubmitVerifyLogin}>Login</button>
                </InputLogin>
            </Meio>
        </LoginPageContainer>
    )
}

export default LoginPage