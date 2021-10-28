import React from "react"
import useForm from "../../hooks/useForm"
import {createContent} from "../../services/createContents"
import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core"
import {ContentsFormContainer, InputsContainer } from "./styled"

const CreatePost = (props) => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createContent(form, clear)
        console.log(form)
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <ContentsFormContainer>
                    <InputsContainer>
                        <TextField
                            value={form.title}
                            name={'title'}
                            onChange={onChange}
                            label={'Título'}
                            variant={'outlined'}
                            fullWidth
                            required
                            autoFocus
                            margin={'normal'}
                        />
                        <TextField
                            value={form.body}
                            name={'body'}
                            onChange={onChange}
                            label={'Conteúdo'}
                            variant={'outlined'}
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
                       Postar
                    </Button>
                </ContentsFormContainer>
            </form>
        </div>
    )
}

export default CreatePost