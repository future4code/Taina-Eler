import React from "react"
import {FooterContainer, SocialMedias, InformationsFooter} from "./styled"

export const Footer = () =>{
    return(
        <FooterContainer>
            <SocialMedias>
                <h3>Facebook</h3>
                <h3>Instagram</h3>
            </SocialMedias>
            <InformationsFooter>
                <p>Sobre</p>
                <p>Termos e Condições</p>
                <p>Política de Privacidade</p>
                <p>Feedback dos Clientes</p>
                <p>Contatos</p>
            </InformationsFooter>
            <hr/>
            <p>&copy; LabeX - All rights reserved</p>
        </FooterContainer>
    )
}