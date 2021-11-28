import React, {useContext} from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer, LoginFormContainer } from "./styled"
import logo from "../../assets/logo1.png"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { goToSingUp } from "../../routes/coordinator"
import {login} from "../../services/access"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { GlobalContext } from "../../contexts/GlobalContext"

const LoginPage = () => {
    useUnProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const { rightButtonText, setRightButtonText } = useContext(GlobalContext);


    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

   

   
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <LoginFormContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            fullWidth
                            margin={"dense"}
                            required
                            type={"email"}
                        />

                        <TextField
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            label={"Senha"}
                            fullWidth
                            margin={"dense"}
                            required
                            type={"password"}
                        />

                        <Button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                        >
                            Login
                        </Button>
                    </form>
                </LoginFormContainer>
            </InputsContainer>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSingUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}

                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
