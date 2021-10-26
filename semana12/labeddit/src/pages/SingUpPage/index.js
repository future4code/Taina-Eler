import React, {useContext} from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpFormContainer } from "./styled"
import logo from "../../assets/logo1.png"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { singUp } from "../../services/access"
import { GlobalContext } from "../../contexts/GlobalContext"

const SingUpPage = () => {
    useUnProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({username: "" ,email: "", password: ""})
    const { rightButtonText, setRightButtonText } = useContext(GlobalContext);

    const onSubmitForm = (event) =>{
        event.preventDefault()
        singUp(form, clear, history, setRightButtonText)
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <form onSubmit={onSubmitForm}>
                <SignUpFormContainer>
                    <InputsContainer>
                        <TextField
                            value={form.username}
                            name={'username'}
                            onChange={onChange}
                            label={'Nome'}
                            variant={'outlined'}
                            fullWidth
                            required
                            autoFocus
                            margin={'normal'}
                        />
                        <TextField
                            value={form.email}
                            name={'email'}
                            onChange={onChange}
                            label={'E-mail'}
                            variant={'outlined'}
                            type={'email'}
                            fullWidth
                            required
                            margin={'normal'}
                        />
                        <TextField
                            value={form.password}
                            name={'password'}
                            onChange={onChange}
                            label={'Senha'}
                            variant={'outlined'}
                            type={'password'}
                            fullWidth
                            required
                            margin={'normal'}
                        />
                    </InputsContainer>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        type={'submit'}
                        fullWidth
                    >
                       Fazer Cadastro
                    </Button>
                </SignUpFormContainer>
            </form>
        </ScreenContainer> 
    )
}

export default SingUpPage